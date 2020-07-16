import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-rco-dashboard-report',
  templateUrl: './rco-dashboard-report.component.html',
  styleUrls: ['./rco-dashboard-report.component.css']
})
export class RcoDashboardReportComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

   $(document).ready(function() {



$('#logout').click(function(){
localStorage.removeItem('key');
localStorage.removeItem('logg');
 window.location.href="/login"
})


 let loggItem = localStorage.getItem('logg');
    let keyItem = localStorage.getItem('key');

  if(loggItem && keyItem=='superadmin'){
  
}
else if(loggItem && keyItem=='ddo' || loggItem && keyItem=='admin' ){
  
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
