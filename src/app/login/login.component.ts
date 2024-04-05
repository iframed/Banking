import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  userFormGroup1! : FormGroup;


constructor( private fb: FormBuilder ,
             private auth : AuthService ,
             private router : Router){ }



ngOnInit(): void {
  this.userFormGroup1=this.fb.group({
   email : this.fb.control(""),
   password : this.fb.control(""),
  })

 }

 handlelogin() {

  let email= this.userFormGroup1.value.email;
  let password= this.userFormGroup1.value.password;

   this.auth.login(email,password).subscribe({

    next : data => {
     
      this.auth.loadProfile(data);
      this.router.navigateByUrl("/admin");
      
    },

    error : err =>{
      console.log(err);
    }
    
    
    
   })


 }

}
