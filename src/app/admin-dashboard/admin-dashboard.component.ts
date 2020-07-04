import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {

   $(document).ready(function() {
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

  

})

  }
}
