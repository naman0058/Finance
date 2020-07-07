import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sbs-admin-login',
  templateUrl: './sbs-admin-login.component.html',
  styleUrls: ['./sbs-admin-login.component.css']
})
export class SbsAdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

$(document).ready(function(){
   console.log('helo admin')
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
            alert("Invalid username or password.")
            else if(result.isAdmin == true || result.isAdmin == "true" ){
            localStorage.setItem('key', 'admin');
            localStorage.setItem('logg', '1');
            success()
  
            }
            else{
            alert("You don't have access...")
            
            }
        
            })

        }
        })


 function done(){
      window.location.href="/home"
     }



function success(){
   window.location.href="/sbs-payment-receipt"
}





      })



  }

}
