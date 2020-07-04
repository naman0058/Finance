import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-reports-form',
  templateUrl: './reports-form.component.html',
  styleUrls: ['./reports-form.component.css']
})
export class ReportsFormComponent implements OnInit {

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

   
     console.log('hii');
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

})

  }
}
