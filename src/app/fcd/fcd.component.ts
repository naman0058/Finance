import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-fcd',
  templateUrl: './fcd.component.html',
  styleUrls: ['./fcd.component.css']
})
export class FcdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
  
  }

}
