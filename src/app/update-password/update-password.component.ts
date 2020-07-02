import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


      $(document).ready(function(){
        let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('token')
        $('.submit').click(function(){
         
         if($('#new_password').val() == [] || $('#new_password').val() == "" || $('#new_password').val() == "null" || $('#new_password').val() == null) alert("Please Enter New Password");
        else if($('#confirm_new_password').val() == [] || $('#confirm_new_password').val() == "" || $('#confirm_new_password').val() == "null" || $('#confirm_new_password').val() == null) alert("Please Enter Password")
       
        else{
          
          
          if( $('#new_password').val()  ==  $('#confirm_new_password').val() ){
            var url = 'http://sikkimfred.local.api/api/user/resetpassword';
            
          var data = {
            sentinel: param,
            newPassword : $('#new_password').val(),
            confirmPassword : $('#confirm_new_password').val()
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
           alert("An error occured");
           else{
        alert("update Successfully")
          
           }
      
          })

      


          }
          else{
            alert('Passwords do not match')
          }
          
        }
        
        })

        

      })

  }

}
