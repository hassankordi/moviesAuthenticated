import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import {PostDataService} from '../post-data.service'

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {



  singUpForm = new FormGroup({
    first_name: new FormControl('',[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
    last_name: new FormControl('',[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(10),Validators.max(60)]),
    password: new FormControl('',[Validators.required]),
  })

 
message;

  postData(){
    if(this.singUpForm.valid){
      this._postData.makeSignUp(this.singUpForm.value).subscribe((x)=>{

        console.log(x)
        this.message = x.message;
        if(x.message == 'success'){
          this._Router.navigate(['/login'])

        }

      }
      )

    }
  }
  constructor(private _postData:PostDataService , private _Router:Router) { }


  ngOnInit(): void {
  }

}




// ,(err)=>{
//   console.log(err)
// }
