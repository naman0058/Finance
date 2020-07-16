import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor() { }

  ngOnInit() {

   $(document).ready(function(){
   console.log('helo admin')
   console.log("key",localStorage.getItem('key'));

let key = 'Item 1';
let logg ='Item 2'

        $('#login').click(function(){
          if($('#userName').val() == [] || $('#userName').val() == "" || $('#userName').val() == "null" || $('#userName').val() == null) alert("Please Enter Username")
        else if($('#password').val() == [] || $('#password').val() == "" || $('#password').val() == "null" || $('#password').val() == null) alert("Please Enter Password")
        else{
          var url = 'http://sikkimfred.local.api/api/user/login';
       
       
          var data = {
            emailId : $('#userName').val(),
            password : $('#password').val()
          }
          console.log('sending data',data)
            fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
              console.log("result",result)

            if(result.error)
            alert("Invalid username or password.");
            // else if(result.errors)
            // alert("Invalid username or password.");
            else{

if(result.isSuperAdmin ==true){

localStorage.setItem('key', 'superadmin');
localStorage.setItem('logg', '1');

done()

}
else if(result.isAdmin == true){
localStorage.setItem('key', 'admin');
localStorage.setItem('logg', '1');
  done1()

}
else{
localStorage.setItem('key', 'ddo');
localStorage.setItem('logg', '1');
done2()

}

              
            
            }
        
            })

        }
        })

         function done(){
     window.location.href="/Admin-Dashboard"
    }

        function done1(){
     window.location.href="/Dashboard"
    }


    function done2(){
     window.location.href="/Dashboard"
    }


      })
  }

}
