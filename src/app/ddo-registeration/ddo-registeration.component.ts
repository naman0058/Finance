import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-ddo-registeration',
  templateUrl: './ddo-registeration.component.html',
  styleUrls: ['./ddo-registeration.component.css']
})
export class DdoRegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

 $(document).ready(function(){
        let department = [];
        let ddo_code= [];
        let district = [];
       
      

       $.getJSON('http://sikkimfred.local.api/api/department',data=>{
         department = data
        fillDropDown('categoryid', data, 'Choose Department', 0) 
        
       })


        $.getJSON('http://sikkimfred.local.api/api/ddo',data=>{
        console.log('ddo_code',data)
         ddo_code = data
        fillDropDown1('ddo_code', [], 'Choose DDO Code', 0) 
        
       })

      
          $('#ddo_code').change(() => {
        let code = $('#ddo_code').val()
 $.getJSON(`http://sikkimfred.local.api/api/ddo/details?ddocode=${code}`,data=>{
console.log(data);


     (<HTMLInputElement>document.getElementById("ddo_name")).value = data.name;
    (<HTMLInputElement>document.getElementById("designationid")).value = data.designationName;
    (<HTMLInputElement>document.getElementById("districtid")).value = data.districtName;

 

        })

})
   


       $('#categoryid').change(() => {
        const filteredData = ddo_code.filter(item => item.departmentId == $('#categoryid').val())
         console.log("filter",filteredData)
        fillDropDown1('ddo_code', filteredData, 'Choose DDO Code', 0)
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


 function fillDropDown1(id, data, label, selectedid = 0) {
        $(`#${id}`).empty()
        $(`#${id}`).append($('<option>').val("null").text(label))
    
        $.each(data, (i, item) => {
            if (item.id == selectedid) {
                $(`#${id}`).append($('<option selected>').val(item.code).text(item.code))
            } else {
                $(`#${id}`).append($('<option>').val(item.code).text(item.code))
            }
        })
    }










     $('#submit').click(function () {

          if ($('#categoryid').val() == null || $('#categoryid').val() == "null" || $('#categoryid').val() == [] || $('#categoryid').val() == "") alert("Select Department Name...")
          else if ($('#ddo_code').val() == null || $('#ddo_code').val() == "null" || $('#ddo_code').val() == [] || $('#ddo_code').val() == "") alert("Select DDO Code...")
          else if ($('#ddo_name').val() == null || $('#ddo_name').val() == "null" || $('#ddo_name').val() == [] || $('#ddo_name').val() == "") alert("Select DDO Name...")
                   else if ($('#officeAddress1').val() == null || $('#officeAddress1').val() == "null" || $('#officeAddress1').val() == [] || $('#officeAddress1').val() == "") alert("Enter Office Address...")
          else if ($('#officeAddress2').val() == null || $('#officeAddress2').val() == "null" || $('#officeAddress2').val() == [] || $('#officeAddress2').val() == "") alert("Enter Office Address...")
          // else if ($('#tinNumber').val() == null || $('#tinNumber').val() == "null" || $('#tinNumber').val() == [] || $('#tinNumber').val() == "") alert("Enter Tin Number...")
          // else if ($('#tanNumber').val() == null || $('#tanNumber').val() == "null" || $('#tanNumber').val() == [] || $('#tanNumber').val() == "") alert("Enter Tan Number...")
          else if ($('#emailId').val() == null || $('#emailId').val() == "null" || $('#emailId').val() == [] || $('#emailId').val() == "") alert("Enter Email ID...")
          else if ($('#contactNumber').val() == null || $('#contactNumber').val() == "null" || $('#contactNumber').val() == [] || $('#contactNumber').val() == "") alert("Enter Contact Number...")
         else if(!$('#contactNumber').val().match('[0-9]{10}'))  {
          alert("Please put 10 digit mobile number");
         }
         else {
            var url ='http://sikkimfred.local.api/api/DDORegistration'
            let insertobj = {
              ddoCode : $('#ddo_code').val(),
             
              departmentId : parseInt($('#categoryid').val()),
              designationId : 5,
              districtId : 1,
              officeAddress1 : $('#officeAddress1').val(),
              officeAddress2 : $('#officeAddress2').val(),
              tinNumber : $('#tin').val(),
              tanNumber : $('#tan').val(),
              emailId : $('#emailId').val(),
              contactNumber : $('#contactNumber').val()
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
              console.log("result",result)
             if(result.errors){
              alert("Enter Correct Emailid format");
              
            } 
            else if(result.error){
              alert("Emailid already exists")
              
            }
          
             else{
              alert("Succesfully Inserted");
              done()
             }
              
              })
          }

        })




function done(){
      window.location.href="/home"
     }






      });
  
  }

}
