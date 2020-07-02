import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-tendering-accounts',
  templateUrl: './tendering-accounts.component.html',
  styleUrls: ['./tendering-accounts.component.css']
})
export class TenderingAccountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   $(document).ready(function() {
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
