import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {




 $(document).ready(function(){
   


    $('#submit').click(function(){


if( $('#employee_code').val() == null || $('#employee_code').val() == "null" || $('#employee_code').val() == [] || $('#employee_code').val() == "" )
  alert("Enter Employee Code...")
else if( $('#office_code').val() == null || $('#office_code').val() == "null" || $('#office_code').val() == [] || $('#office_code').val() == "" )
  alert("Enter Office Code...")
else{
let employee_code = encodeURIComponent($('#employee_code').val())
let office_code = encodeURIComponent($('#office_code').val())

console.log("empcode",employee_code)
console.log("offceid",office_code)

   var url = `http://sikkimfred.local.api/api/employee/details?empCode=${employee_code}&officeId=${office_code}`;

   
            fetch(url,{
            method : 'GET',
        
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
            
console.log("result recieve", result)
            $('#login').hide()

               makeTable(result)  
               makeDeduction(result.result.deductionsByAdjustment)
               makeInsurance(result.result.insurances)
               makeLoans(result.result.loans)
               makepercentageAllowanceTypes(result.result.percentageAllowanceTypes)
              makefixedAllowanceTypes(result.result.fixedAllowanceTypes)
              makeslabAllowanceSubTypes(result.result.slabAllowanceSubTypes)
              makefamilyMaintenances(result.result.familyMaintenances)
              makerecoveries(result.result.recoveries)
              makeothers(result.result.others)
        
       

      })
}


function makeothers(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Description</th>
    <th>Amount</th>
  
  
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.otherId}</td>
  <td>${item.description}</td>
  <td>${item.amount}</td>
  
 
</tr>`
  })
 table+=`</tbody>
</table>`
$('#others').html(table)
}

function makerecoveries(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Total Amount</th>
   <th>Installment Amount</th>
   <th>Current Balance</th>
   <th>Remarks</th>
  
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.recoveryId}</td>
  <td>${item.recoveryTypeName}</td>
  <td>${item.totalAmount}</td>
  <td>${item.installmentAmount}</td>
  <td>${item.currentBalance}</td>
  <td>${item.remarks}</td>
 
</tr>`
  })
 table+=`</tbody>
</table>`
$('#recoveries').html(table)
}


function makefamilyMaintenances(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Bank Name</th>
    <th>Branch Name</th>
   <th>Account Holder Name</th>
   <th>Account Number</th>
   <th>Amount</th>
   <th>Description</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.familyMaintenanceId}</td>
  <td>${item.bankName}</td>
  <td>${item.bankBranchName}</td>
  <td>${item.accountHolderName}</td>
  <td>${item.accountNumber}</td>
  <td>${item.amount}</td>
  <td>${item.description}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#familyMaintenances').html(table)
}

function makeslabAllowanceSubTypes(data){
  let table = `
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
   <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Type Name</th>
   <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.slabAllowanceSubTypeId}</td>
  <td>${item.slabAllowanceSubTypeName}</td>
  <td>${item.slabAllowanceTypeName}</td>
  <td>${item.amount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#slabAllowanceSubTypes').html(table)
}




function makefixedAllowanceTypes(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
     <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.fixedAllowanceTypeId}</td>
  <td>${item.name}</td>
  <td>${item.amount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#fixedAllowanceTypes').html(table)
}



function makepercentageAllowanceTypes(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>

  <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Rate</th>
    <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.percentageAllowanceTypeId}</td>
  <td>${item.percentageAllowanceName}</td>
  <td>${item.percentageAllowanceRate}</td>
  <td>${item.percentageAllowanceAmount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#percentageAllowanceTypes').html(table)
}


function makeLoans(data){
  let table = ` 

<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered" >
<h5><b>Loans : </b></h5>
    <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Bank Name</th>
    <th>Branch Name</th>
    <th>IFSC Code</th>
    <th>Account Number</th>
    <th>Installment Amount</th>
    <th>Number of Installment</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.loanId}</td>
  <td>${item.bankName}</td>
  <td>${item.bankBranchName}</td>
  <td>${item.ifscCode}</td>
  <td>${item.bankAccountNumber}</td>
  <td>${item.loanInstallmentAmount}</td>
  <td>${item.numberOfInstallment}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#loans').html(table)
}



function makeInsurance(data){
  let table = ` 
<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
  <table class="table table-bordered">
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Company Name</th>
    <th>Branch Name</th>
    <th>Policy Number</th>
    <th>Premium Amount</th>
    <th>PAO Code</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.insuranceId}</td>
  <td>${item.insuranceCompanyName}</td>
  <td>${item.insuranceCompanyBranchName}</td>
  <td>${item.policyNumber}</td>
  <td>${item.premiumAmount}</td>
  <td>${item.paCode}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#insurance').html(table)
}


function makeDeduction(data){
  let table = `

<style type="text/css">
  td{
font-size: 12px;
  }
  th{
    font-size: 12px;
  }
</style>
   <table class="table table-bordered" >
   <thead class="text-primary">
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Type Name</th>
    <th>Amount</th>
    <th>Head</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.deductionByAdjustmentId}</td>
  <td>${item.deductionByAdjustmentTypeName}</td>
  <td>${item.deductionAmount}</td>
  <td>${item.adjustmentHead}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#deduction').html(table)
}



function makeTable(result){
  let table = `
  <div id="details">
  
        <!-- End content header -->
  
        <!-- Begin content body -->
        <section class="my-app__body">
          <div class="container">
            <div class="row">
             
              <div class="col-4">
                <!-- Begin Payment Balance card -->
                <div class="my-card card">
                  <div class="my-card__header card-header bg-primary" style="height:50px">

                    <div class="my-card__header-title">
                     <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Profile Details</h5>

                                         </div>
                    <!-- <a class="my-card__header-link" href="#">Details →</a> -->
                  </div>
                  <div class="my-card__body card-body">
                    <dl class="my-list my-list--definitions my-dl">
                     <dt>Name</dt>
                      <dd>${result.result.firstName} ${result.result.middleName} ${result.result.lastName}</dd>
                      <dt>Employee Code</dt>
                      <dd>${result.result.employeeCode}</dd>
                      <dt>Date Of Birth</dt>
                      <dd>${result.result.dateOfBirth}</dd>
                      <dt>Gender</dt>
                      <dd>${result.result.gender}</dd>
                      <dt>Mobile Number</dt>
                      <dd>${result.result.phoneNumber}</dd>
                      <dt>Email</dt>
                      <dd>${result.result.emailId}</dd>
  
                      <dt>Religion</dt>
                      <dd>${result.result.religionId}</dd>
                      <dt>Aadhar Number</dt>
                      <dd>${result.result.aadharNumber}</dd>
                      <dt>Department</dt>
                      <dd>${result.result.departmentId}</dd>
                      <dt>District</dt>
                      <dd>${result.result.districtId}</dd>
  
                      <dt>Designation</dt>
                      <dd>${result.result.designationId}</dd>
                     
                      
                    </dl>
                   
                  
                  </div>
                  
                </div>
                <!-- End Payment Balance card -->

  
             
              </div>



<div class="col-4">
                  <!-- Begin Payment Balance card -->
                  <div class="my-card card">
                    <div class="my-card__header card-header bg-primary" style="height:50px">
 <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Bank Details</h5>
                     
                      <!-- <a class="my-card__header-link" href="#">Details →</a> -->
                    </div>
                    <div class="my-card__body card-body">
  
                      <dl class="my-list my-list--definitions my-dl">
                        <dt>Account Number</dt>
                        <dd>${result.result.accountNumber}</dd>
                        <dt>Branch ID</dt>
                        <dd>${result.result.bankBranchId}</dd>
                        <dt>Bank ID</dt>
                        <dd>${result.result.bankId}</dd>
                        
                        
                      </dl>
                     
                    
                    </div>
                    
                  </div>
                  <!-- End Payment Balance card -->
    
               
                </div>
    



 <div class="col-4">
                 




 <!-- Begin Payment Balance card -->
                  <div class="my-card card">
                    <div class="my-card__header card-header bg-primary" style="height:50px">
 <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Joining & Retirement Date</h5>
                     
                      <!-- <a class="my-card__header-link" href="#">Details →</a> -->
                    </div>
                    <div class="my-card__body card-body">
  
                      <dl class="my-list my-list--definitions my-dl">
                        <dt>Date of Joining</dt>
                        <dd>${result.result.dateOfJoining}</dd>
                        <dt>Date of Retirement</dt>
                        <dd>${result.result.dateOfRetirement}</dd>
                        
                        
                        
                      </dl>
                     
                    
                    </div>
                    
                  </div>
                  <!-- End Payment Balance card -->
    
                
                
                </div>
    



  
           
  
  
  
  
              
            </div>
          </div>
  
  <br/>
          
  
        </section>
        </div>`
        $('#result').html(table)
}
     
       
})      
    })

  
  }

}
