import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-frbm',
  templateUrl: './frbm.component.html',
  styleUrls: ['./frbm.component.css']
})
export class FrbmComponent implements OnInit {

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
