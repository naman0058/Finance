import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-create-sbs-admin',
  templateUrl: './create-sbs-admin.component.html',
  styleUrls: ['./create-sbs-admin.component.css']
})
export class CreateSbsAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   $(document).ready(function () {

    let loggItem = localStorage.getItem('logg');
    let keyItem = localStorage.getItem('key');

  if(loggItem && keyItem=='superadmin'){
   
}
else if(loggItem && keyItem=='ddo'){
   window.location.href="/Dashboard"
}
  else{
   window.location.href="/login"
  }


$('#logout').click(function(){
localStorage.removeItem('key');
localStorage.removeItem('logg');
 window.location.href="/login"
})


  
 $(".ctgli:has(.ctgulChild)").click(function (e) {
    e.preventDefault();
    //li_HAVE_Child-hasShowed-hasSlideD
    if($(this).hasClass('showed')){
        //-x-hasShowed
        $('.ctgli').removeClass('showed');
        //-x-hasSlideD
        $(this).children('.ctgulChild').slideUp();
        
    }
    
    else{
        
        $('.ctgulChild').slideUp();
        $('.ctgli').removeClass('showed');

        $(this).addClass('showed');
        $(this).children('.ctgulChild').slideToggle();
      
    }
});

$('.ctgli').click(function(){
    $(this).toggleClass('wtok');
});

   
        let department = [];
        let district= [];
        let designation = [] ;

        $.getJSON('http://sikkimfred.local.api/api/department', data => {
          department = data
          console.log(data)
          fillDropDown('departmentid', data, 'Choose Department', 0)

        })



  $.getJSON('http://sikkimfred.local.api/api/district', data => {
          district = data
          fillDropDown('districtid', data, 'Choose District', 0)

        })


          $.getJSON('http://sikkimfred.local.api/api/designation', data => {
          designation = data
          fillDropDown('designationid', data, 'Choose Designation', 0)

        })



        $('.submit').click(function () {

          if ($('#firstName').val() == null || $('#firstName').val() == "null" || $('#firstName').val() == [] || $('#firstName').val() == "") alert("Enter First Name...")
          else if ($('#lastName').val() == null || $('#lastName').val() == "null" || $('#lastName').val() == [] || $('#lastName').val() == "") alert("Enter Last Name...")
          else if ($('#password').val() == null || $('#password').val() == "null" || $('#password').val() == [] || $('#password').val() == "") alert("Enter Password...")
          else if ($('#emailId').val() == null || $('#emailId').val() == "null" || $('#emailId').val() == [] || $('#emailId').val() == "") alert("Enter Email ID...")
          else if ($('#number').val() == null || $('#number').val() == "null" || $('#number').val() == [] || $('#number').val() == "") alert("Enter Mobile Number...")
          else if ($('#departmentid').val() == null || $('#departmentid').val() == "null" || $('#departmentid').val() == [] || $('#departmentid').val() == "") alert("Choose Department Name...")
          else if ($('#districtid').val() == null || $('#districtid').val() == "null" || $('#districtid').val() == [] || $('#districtid').val() == "") alert("Choose District...")
        else if ($('#designationid').val() == null || $('#designationid').val() == "null" || $('#designationid').val() == [] || $('#designationid').val() == "") alert("Choose Designation...")
          else {
            var url ='http://sikkimfred.local.api/api/user'
            let insertobj = {
              firstName : $('#firstName').val(),
              lastName : $('#lastName').val(),
              password : $('#password').val(),
              userType : 'SuperAdmin',
              emailId : $('#emailId').val(),
              mobileNumber : $('#number').val(),
              departmentId : parseInt($('#departmentid').val()),
              districtId : parseInt($('#districtid').val()),
              designationId : parseInt($('#designationid').val())
             
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
              console.log("result hai",result);
             if(result.msg=="success") alert("Successfully Inserted")
             else alert("An error occured..Please try again later")
              
              })
          }

        })


        function fillDropDown(id, data, label, selectedid = 0) {
          $(`#${id}`).empty()
          $(`#${id}`).append($('<option>').val("null").text(label))

          $.each(data, (i, item) => {
            if (item.id == selectedid) {
              $(`#${id}`).append($('<option selected>').val(item.id).text(item.name))
            } else {
              $(`#${id}`).append($('<option>').val(item.id).text(item.name))
            }
          })
        }



      });
  }

}
