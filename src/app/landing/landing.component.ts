import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() { }

  ngOnInit() {
   $(document).ready(function () {



     $('.send').click(function(){
     if($('#name').val() == null || $('#name').val() == [] || $('#name').val() == "" || $('#name').val() == "null" ) alert("Enter Name...")
     else  if($('#email').val() == null || $('#email').val() == [] || $('#email').val() == "" || $('#email').val() == "null" ) alert("Enter Email...")
       else  if($('#number').val() == null || $('#number').val() == [] || $('#number').val() == "" || $('#number').val() == "null" ) alert("Enter Mobile Number...")
        else  if($('#address').val() == null || $('#address').val() == [] || $('#address').val() == "" || $('#address').val() == "null" ) alert("Enter Address...")
          else  if($('#comment').val() == null || $('#comment').val() == [] || $('#comment').val() == "" || $('#comment').val() == "null" ) alert("Enter Comment...")
         else if(!$('#number').val().match('[0-9]{10}'))  {
          alert("Please put 10 digit mobile number");
          }
          else{

          var url ='http://sikkimfred.local.api/api/feedback'
          let insertobj = {

name : $('#name').val(),
emailId : $('#email').val(),
address : $('#address').val(),
contactNumber : $('#number').val(),
comments : $('#comment').val()


          }

console.log("InsertObj",insertobj);
            fetch(url,{
              method : 'POST',
              body: JSON.stringify(insertobj),
              headers : new Headers({
               'Content-Type': 'application/json'
              })
              }).then(res=>res.json())
              .catch(error => console.error("Error",error))
              .then (result => {
              console.log("response",result)
              if(result.msg=="success") alert("Successfully Inserted");
    else if(result.errors.EmailID) alert("Invalid Emailid");
             else alert("An error occured..Please try again later");
              
              })





          }
        

     })
 


   


    


      });
  
  }

}
