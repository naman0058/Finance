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
     console.log('hii');
  

})

  }
}
