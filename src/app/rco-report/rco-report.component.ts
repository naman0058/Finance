import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-rco-report',
  templateUrl: './rco-report.component.html',
  styleUrls: ['./rco-report.component.css']
})
export class RcoReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {




  $.getJSON('http://sikkimfred.local.api/api/RCORegistration/pending',data=>{
          let users = data[0]


// for(var key in users){
//   console.log(key + ':' + users[key])
// }
       makeTable(data)
        
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


      function makeTable(users){
        let table = `

<style type="text/css">
  td{
font-size: 13px;
  }
  th{
    font-size: 13px;
  }
</style>

         <table class="table table-striped">

      <thead class="text-primary">
          <tr>
          <th>SL No.</th> 
          <th>Name</th>
          <th>REG.Type</th>
          <th>Department</th>
          <th>Designation</th> 
          <th>District</th>
          <th>Office Address(1)</th>
          <th>Office Address(2)</th>
          <th>Tin No</th> 
          <th>Tan No</th>
          <th>Email</th>
           <th>Accept</th>
          <th>Delete</th>
            </tr>
        </thead>
       
        <tbody>`
        $.each(users,(i,item)=>{

        table+=`  <tr>
        <td>${i+1}</td>
        <td>${item.emailId}</td>
        <td>${item.registrationType}</td>
        <td>${item.department}</td>
        <td>${item.designation}</td>
        <td>${item.district}</td>
        <td>${item.officeAddress1}</td>
        <td>${item.officeAddress2}</td>
        <td>${item.tinNumber}</td>
        <td>${item.tanNumber}</td>
        <td>${item.emailId}</td>
        
        <td><button class="btn btn-success accept" regid="${item.id}">Accept</button></td>
       <td><button class="btn btn-danger delete" id="${item.id}">Delete</button></td>
      </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
      }




      $('#result').on('click', '.accept', function() {
        var url = 'http://sikkimfred.local.api/api/RCORegistration/approve';
       
        const regId = $(this).attr('regid')
          var data = {
            regId : parseInt(regId),
            approvedBy : 1
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
            
            refresh1()
            
            })
    })



    $('#result').on('click', '.delete', function() {
      const id = $(this).attr('id')
      console.log("id hai",id)

      fetch('http://sikkimfred.local.api/api/RCORegistration/' + id, {
        method: 'DELETE',
      }).then(res => res.text()) // or res.json()
      .then(res => refresh())
    })



function refresh(){
  
  $.getJSON('http://sikkimfred.local.api/api/RCORegistration/pending',data=>{
     makeTable(data)
     alert("Request Deleted Successfully")
    })
}



function refresh1(){
  
  $.getJSON('http://sikkimfred.local.api/api/RCORegistration/pending',data=>{
     makeTable(data)
     alert("Request Accepted Successfully")
    })
}

  
  }

}
