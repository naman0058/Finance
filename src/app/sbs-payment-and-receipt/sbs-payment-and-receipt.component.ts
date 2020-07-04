import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sbs-payment-and-receipt',
  templateUrl: './sbs-payment-and-receipt.component.html',
  styleUrls: ['./sbs-payment-and-receipt.component.css']
})
export class SbsPaymentAndReceiptComponent implements OnInit {

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


})


  }

}
