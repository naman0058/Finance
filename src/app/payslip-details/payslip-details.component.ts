import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-payslip-details',
  templateUrl: './payslip-details.component.html',
  styleUrls: ['./payslip-details.component.css']
})
export class PayslipDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


 $(document).ready(function(){



    $('#submit').click(function(){


if( $('#employee_code').val() == null || $('#employee_code').val() == "null" || $('#employee_code').val() == [] || $('#employee_code').val() == "" )
  alert("Enter Employee Code...")
else if( $('#month').val() == null || $('#month').val() == "null" || $('#month').val() == [] || $('#month').val() == "" )
  alert("Select Month...")
  else if( $('#year').val() == null || $('#year').val() == "null" || $('#year').val() == [] || $('#year').val() == "" )
  alert("Select Year...")
else{
let employee_code = $('#employee_code').val()
let month = $('#month').val()
let years = $('#year').val()
 
   var url = `http://local.api.com/api/employee/salary?empCode=${employee_code}&month=${month}&year=${years}`;

    
            fetch(url,{
            method : 'GET',
                 headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
              console.log("result recieve",result);
              let allowances = result.allowances
              let deductionByCheque = result.deductionByCheque
              let deductionsByAdjustment = result.deductionsByAdjustment
              let recoveries = result.recoveries
             makeAllowances(allowances);
             makeDeductionByCheque(deductionByCheque);
             makeDeductionsByAdjustment(deductionsByAdjustment)
             makerecoveries(recoveries)
             makeTable(result)
             makeOthers(result)

// for(var key in deductionsByAdjustment){
//   console.log(key + ':' + deductionsByAdjustment[key])
// } 

              $('#login').hide()
            // makeTable(result)

        
       

      })
}





     function makeDeductionsByAdjustment(deductionsByAdjustment){
        let table = `<div class="my-card card">
            <div class="my-card__header card-header bg-primary" style="height:50px">
              <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Deductions By Adjustment Details</h5>
               </div>
            <ul class="my-list list-group list-group-flush">`
              
             for(var key in deductionsByAdjustment){
              
              table+= `<li class="my-list-item list-group-item">
                <div class="my-list-item__text">
                  <h4 class="my-list-item__text-title">${key}</h4>
                </div>
                <div class="my-list-item__fee">
                  <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${deductionsByAdjustment[key]}</a>
                </div>
              </li>`
        }
        
            table+=`</ul>
            </div>`
        $('#deductionsByAdjustment').html(table)
     }

     function makeAllowances(allowances){
        let table = `<div class="my-card card">
            <div class="my-card__header card-header bg-primary" style="height:50px">
              <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Allowances Details</h5>
               </div>
            <ul class="my-list list-group list-group-flush">`
              
             for(var key in allowances){
              
              table+= `<li class="my-list-item list-group-item">
                <div class="my-list-item__text">
                  <h4 class="my-list-item__text-title">${key}</h4>
                </div>
                <div class="my-list-item__fee">
                  <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${allowances[key]}</a>
                </div>
              </li>`
        }
        
            table+=`</ul>
            </div>`
        $('#makeallowances').html(table)
     }

      function makeDeductionByCheque(deductionByCheque){
        let table = `<div class="my-card card">
            <div class="my-card__header card-header bg-primary" style="height:50px">
              <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Deduction By Cheque Details</h5>
            </div>
            <ul class="my-list list-group list-group-flush">`
              
             for(var key in deductionByCheque){
              
              table+= `<li class="my-list-item list-group-item">
                <div class="my-list-item__text">
                  <h4 class="my-list-item__text-title">${key}</h4>
                </div>
                <div class="my-list-item__fee">
                  <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${deductionByCheque[key]}</a>
                </div>
              </li>`
        }
        
            table+=`</ul>
          </div> `
        $('#makedeductionbycheques').html(table)
     }

function makeTable(result){
  let table = `<div>
  <!-- Begin content header -->
  <section class="my-app__header">
    <div class="container">
      <div class="my-app__header-inner">
        <div class="my-app__header-text media">
         <img src="/images/dataresult[1][0].imagedata" style="width: 80px;">
          <div class="media-body">
            <h1 class="my-app__header-title">Hi there, ${result.fullName}!</h1>
            <!-- <div class="my-input input-group mb-3">
             </div>-->
          </div> 
        </div>
        <div class="my-action-buttons my-app_header_buttons">
          <!-- <button class="my-action-button">
            <img class="my-action-button__icon" src="./images/icon-money.svg" alt>
            Send money
          </button> -->
       
        </div>
      </div>
    </div>
  </section>
  <!-- End content header -->

  <!-- Begin content body -->
  
    
            <!-- Begin Pending card -->
            <div class="my-card card">
              <div class="my-card__header card-header bg-primary" style="height:50px">
                <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Personal Details</h5>
                <!-- <a class="my-card__header-link" href="#">See all →</a> -->
              </div>
              <ul class="my-list list-group list-group-flush">
                
               
                
                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Employee Code</h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.employeeCode}</a>
                  </div>
                </li>
          
          
                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Designation</h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.designation}</a>
                  </div>
                </li>


                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Section </h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.section}</a>
                  </div>
                </li>


                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Department</h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.department}</a>
                  </div>
                </li>

              </ul>
            </div>
            <!-- End Pending card -->
</div>
  
</div>`
$('#personal').html(table)
}


function makeOthers(result){
  let table = `
            <div class="my-card card">
              <div class="my-card__header card-header bg-primary" style="height:50px">
                <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Others Details</h5>
              
              </div>
              <ul class="my-list list-group list-group-flush">
                
               
                
                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Gross Pay </h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.grossPay}</a>
                  </div>
                </li>
          
          
                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Total Deduction</h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.totalDeduction}</a>
                  </div>
                </li>


                <li class="my-list-item list-group-item">
                 
                  <div class="my-list-item__text">
                    <h4 class="my-list-item__text-title">Net Pay </h4>
                
                  </div>
                  <div class="my-list-item__fee">
                    <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.netPay}</a>
                  </div>
                </li>



              </ul>
              </div>`
$('#others').html(table)
}

 function makerecoveries(recoveries){
        let table = `<div class="my-card card">
            <div class="my-card__header card-header bg-primary" style="height:50px">
              <h5 class="my-card__header-title card-title" style="color:white;margin-top:-10px;">Recovries Details</h5>
               </div>
            <ul class="my-list list-group list-group-flush">`
              
             for(var key in recoveries){
              
              table+= `<li class="my-list-item list-group-item">
                <div class="my-list-item__text">
                  <h4 class="my-list-item__text-title">${key}</h4>
                </div>
                <div class="my-list-item__fee">
                  <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${recoveries[key]}</a>
                </div>
              </li>`
        }
        
            table+=`</ul>
            </div>`
        $('#recoveries').html(table)
     }
       
})      
    })
  
  }

}
