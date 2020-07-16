import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
declare var $: any;
@Component({
  selector: 'app-sbs-payment-details',
  templateUrl: './sbs-payment-details.component.html',
  styleUrls: ['./sbs-payment-details.component.css']
})
export class SbsPaymentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  $(document).ready(function(){





let loggItem = localStorage.getItem('logg');
    let keyItem = localStorage.getItem('key');

  if(loggItem && keyItem=='admin'){
   
}
else if(loggItem && keyItem=='ddo'){
   window.location.href="/login"
}
  else{
   window.location.href="/login"
  }



  

$('#logout').click(function(){
localStorage.removeItem('key');
localStorage.removeItem('logg');
 window.location.href="/sbs-admin-login"
})






//Show Monthly Wise


$('.show_month').click(function(){
  if($('#from_month').val() == null || $('#from_month').val() == "null" || $('#from_month').val() == [] || $('#from_month').val() == "") alert("Select From Month")
  else if($('#to_month').val() == null || $('#to_month').val() == "null" || $('#to_month').val() == [] || $('#to_month').val() == "") alert("Select To Month")
 else{

let from_month = $('#from_month').val()
let to_month = $('#to_month').val()

 var vals = from_month.split('-');

   var years1 = vals[0];
   var months1 = vals[1];




 var vals1 = to_month.split('-');
   var years2 = vals1[0];
   var months2 = vals1[1];




console.log("final1",years2);
console.log("final2",months2);

$.ajax({
    url : `http://sikkimfred.local.api/api/sbspayment/permonth/${months1}-${years1}/${months2}-${years2}`,
    method : "GET",
    success : function(data) {
        console.log(data)
        var month = [];
        var totalprice = []
       for(var i in data){
           month.push(data[i].month)
           totalprice.push(data[i].amount)
       }

       var chartdata = {
           labels : month,
           datasets : [{
               label : "Monthly Income",
               backgroundColor : '#36A2EB',
               borderColor : '#FF6384',
               hoverBackgroundColor : 'red',
               hoverBorderColor : 'rgba(200,200,200,0.75)',
               data : totalprice
           }]
       }

      var ctx = $('#mycanvas')
      let barGraph = new Chart(ctx,{
          type : 'line',
          data : chartdata
      })
    },
    error : function(data){

        alert('Error Occured');
    }
})








var url = `http://sikkimfred.local.api/api/sbspayment/${months1}-${years1}/${months2}-${years2}`;
         
            fetch(url,{
            method : 'GET',
                     
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
               makeTableDate(result)

            
            })




  }
})



// Show Yearly Report

$('.show_yearly').click(function(){
  if($('#from_date1').val() == null || $('#from_date1').val() == "null" || $('#from_date1').val() == [] || $('#from_date1').val() == "") alert("Select From Date")
 else{

let from_date1 = $('#from_date1').val()


 var vals = from_date1.split('-');
   var years1 = vals[0];

$.ajax({
    url : `http://sikkimfred.local.api/api/sbspayment/permonth/${years1}-${years1}`,
    method : "GET",
    success : function(data) {
        console.log(data)
        var month = [];
        var totalprice = []
       for(var i in data){
           month.push(data[i].month)
           totalprice.push(data[i].amount)
       }

       var chartdata = {
           labels : month,
           datasets : [{
               label : "Yearly Income",
               backgroundColor : '#36A2EB',
               borderColor : '#FF6384',
               hoverBackgroundColor : 'red',
               hoverBorderColor : 'rgba(200,200,200,0.75)',
               data : totalprice
           }]
       }
      var ctx = $('#mycanvas')
      var barGraph = new Chart(ctx,{
          type : 'line',
          data : chartdata
      })
    },
    error : function(data){

        alert('Error Occured');
    }
})









var url = `http://sikkimfred.local.api/api/sbspayment/${years1}-${years1}`;
         
            fetch(url,{
            method : 'GET',
                     
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
            console.log("result",result)
               makeTableDate(result)
            

            
            })





  }
})






//Show Difference Report Yearly 

$('.show').click(function(){
  if($('#from_date').val() == null || $('#from_date').val() == "null" || $('#from_date').val() == [] || $('#from_date').val() == "") alert("Select From Date")
  else if($('#to_date').val() == null || $('#to_date').val() == "null" || $('#to_date').val() == [] || $('#to_date').val() == "" ) alert("Select To Date")
  else{

let from_date = $('#from_date').val()
let to_date = $('#to_date').val()

 var vals = from_date.split('-');
   var years1 = vals[0];


 var vals2 = to_date.split('-');  
var years2 = vals2[0];


console.log("year",years1);
console.log("year",years2);

$.ajax({
    url : `http://sikkimfred.local.api/api/sbspayment/permonth/${years1}-${years1}`,
    method : "GET",
    success : function(data) {
        console.log(data)
        var month = [];
        var totalprice = []
       for(var i in data){
           month.push(data[i].month)
           totalprice.push(data[i].amount)
       }

       var chartdata = {
           labels : month,
           datasets : [{
               label : "Difference Report",
               backgroundColor : '#36A2EB',
               borderColor : '#FF6384',
               hoverBackgroundColor : 'red',
               hoverBorderColor : 'rgba(200,200,200,0.75)',
               data : totalprice
           }]
       }
      var ctx = $('#mycanvas')
      var barGraph = new Chart(ctx,{
          type : 'line',
          data : chartdata
      })
    },
    error : function(data){

        alert('Error Occured');
    }
})




$.ajax({
    url : `http://sikkimfred.local.api/api/sbspayment/permonth/${years2}-${years2}`,
    method : "GET",
    success : function(data) {
        console.log(data)
        var month = [];
        var totalprice = []
       for(var i in data){
           month.push(data[i].month)
           totalprice.push(data[i].amount)
       }

       var chartdata = {
           labels : month,
           datasets : [{
               
               backgroundColor : '#36A2EB',
               borderColor : '#FF6384',
               hoverBackgroundColor : 'red',
               hoverBorderColor : 'rgba(200,200,200,0.75)',
               data : totalprice
           }]
       }
      var ctx = $('#mycanvas1')
      var barGraph = new Chart(ctx,{
          type : 'line',
          data : chartdata
      })
    },
    error : function(data){

        alert('Error Occured');
    }
})










var url = `http://sikkimfred.local.api/api/sbspayment/${years1}-${years2}`;
         
            fetch(url,{
            method : 'GET',
                     
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
             makeTableDate(result)
            

            
            })







  }
})

  function makeTableDate(result){

    let table = ` 

    <style type="text/css">
  td{
font-size: 13px;
  }
  th{
    font-size: 13px;
  }
</style>

        <table class="table table-striped" style="height:500px;">

      <thead class="text-primary">
          <tr>
              <th>SL No.</th> 
            <th>Id</th>
            <th>Branch Code</th>
            <th>Branch Name</th>
             <th>Department ID</th>
              <th>Major Head</th>
               <th>Cheque Amount</th>
               <th>Cheque Date</th>
               <th>Cheque Number</th>
                <th>PAO Code</th>
                <th>Plan / Non Plan</th>
                <th>Work</th>
               <th>Payment Date</th>
                <th>Created Date</th>

            </tr>
        </thead>
       
        <tbody>`
        $.each(result,(i,item)=>{

        table+=`  <tr>
            <td>${i+1}</td>
            <td>${item.id}</td>
            <td>${item.branchCode}</td>
            <td>${item.branchName}</td>
             <td>${item.departmentID}</td>
            <td>${item.majorHead}</td>
            <td>${item.chequeAmount}</td>
             <td>${item.chequeDate}</td>
            <td>${item.chequeNumber}</td>
            <td>${item.paoCode}</td>
            <td>${item.planNonPlan}</td>
             <td>${item.isWorks}</td>
            <td>${item.paymentDate}</td>
            <td>${item.createdDate}</td>
          
           
          </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
  }


})


  }

}
