import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup , FormControl  } from "@angular/forms";
declare var $: any;
@Component({
  selector: 'app-sbs-upload',
  templateUrl: './sbs-upload.component.html',
  styleUrls: ['./sbs-upload.component.css']
})
export class SbsUploadComponent implements OnInit {

  form: FormGroup;
 
 constructor(
  public fb: FormBuilder,
  private http: HttpClient
)  {
this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
   }

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


  $('#logout').click(function(){
localStorage.removeItem('key');
localStorage.removeItem('logg');
 window.location.href="/login"
})

   
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

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }


  

  submitForm() {


console.log(this.form.value)

    var formData: any = new FormData();
    formData.append("FileType", this.form.get('name').value);
    formData.append("File", this.form.get('avatar').value);
console.log("formdata",formData)
    this.http.post('http://sikkimfred.local.api/api/sbsfile/upload', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

}




}




