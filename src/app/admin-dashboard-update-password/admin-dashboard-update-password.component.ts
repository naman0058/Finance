import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-admin-dashboard-update-password',
  templateUrl: './admin-dashboard-update-password.component.html',
  styleUrls: ['./admin-dashboard-update-password.component.css']
})
export class AdminDashboardUpdatePasswordComponent implements OnInit {

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
else if(loggItem && keyItem=='admin'){
  
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







        $('#login').click(function(){
          if($('#userName').val() == [] || $('#userName').val() == "" || $('#userName').val() == "null" || $('#userName').val() == null) alert("Please Enter Username")
        else{
          var url = 'http://sikkimfred.local.api/api/user/sendpasswordlink';
          var data = {
            emailid : $('#userName').val(),
           }
          console.log('sending data',data)
            fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
            console.log("result",result)
              if(result.error) alert("Email Id not exists")
              else alert("Link has been sent to registered email...")


            })

        }
        })









})

  }
}
