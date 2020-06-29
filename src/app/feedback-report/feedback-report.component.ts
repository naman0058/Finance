import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.css']
})
export class FeedbackReportComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {

   $(document).ready(function() {
        $.getJSON('http://sikkimfred.local.api/api/feedback',data=>{
        console.log("data",data)
       makeTable(data)
        
       })




  function makeTable(data){
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
          <th>Email</th>
          <th>Address</th>
          <th>Mobile Number</th>
          <th>Feedback</th> 
          <th>Date</th>
         
            </tr>
        </thead>
       
        <tbody>`
        $.each(data,(i,item)=>{

        table+=`  <tr>
        <td>${i+1}</td>
        <td>${item.name}</td>
        <td>${item.emailID}</td>
        <td>${item.address}</td>
        <td>${item.contactNumber}</td>
        <td>${item.comments}</td>
        <td>${item.createdDate}</td>
        
       
       <td><button class="btn btn-danger delete" id="${item.id}">Delete</button></td>
      </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
      }



    $('#result').on('click', '.delete', function() {
      const id = $(this).attr('id')
      console.log("id hai",id)

      fetch('http://sikkimfred.local.api/api/feedback/' + id, {
        method: 'DELETE',
      }).then(res => res.text()) // or res.json()
      .then(res => refresh())
    })



function refresh(){
  
  $.getJSON('http://sikkimfred.local.api/api/feedback',data=>{
     makeTable(data)
     alert("Feedback Deleted Successfully")
    })
}




})

  }

}
