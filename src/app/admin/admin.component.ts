import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
editRoles(id: number) {
  const newRoles: string[] = ['ADMIN']; 
  
  this.userservice.updateUserRoles(id,newRoles).subscribe({
    next:(data)=>{
      console.log("saved")
    },
    error:(err)=>{
      console.log(err);
    }
    
   
  })

  
}








  user!: Observable<Array<User>>;
  
  //Clients: Observable<Array<Clients>> | undefined;
  
  
    errorMessage! : string;
    formGroup! : FormGroup ;
  
  constructor(private userservice:AdminserviceService,
              private fb:FormBuilder
          ){
  
    }
  
  
    
    ngOnInit(): void {
  
  
      this.formGroup= this.fb.group({
        keyword : this.fb.control("")
      });
       this.loadClients();
       
       
       
  
    }
    loadClients() {
      this.user = this.userservice.getUsers().pipe(
        catchError(err => {
          this.errorMessage = err.message;
          return throwError(err);
        })
      );
    }
  /*searchClients() {
  
    let kw=this.searchformGroup?.value.keyword;
    this.clientservice.searchClient(kw).subscribe(
      {
        next: (data :any)=>{
          
         this.Client=data;
  
        },
        error: (err)=>{
          console.log(err);
        }
      }
    );
  
  }*/
  
  
  }
  
  
  
  /*.pipe(catchError(err  => {
      this.errorMessage=err.message;
      return throwError(err);
    })); */
   
  /*subscribe(
      {
        next: (data :any)=>{
          
         this.Client=data;
  
        },
        error: (err)=>{
          console.log(err);
        }
      }
    ) */
  
    
  
  
  
