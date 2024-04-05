
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { Clients } from '../models/clients';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {



suprimerClient(_t35: Clients) {
   
  let conf= confirm("vous etez sure??")
  if(!conf) return;
  this.clientservice.suprimerClients(_t35.id).subscribe(
    {
      next : (data)=>{
       console.log("suprimer");
       location.reload();
      },
      error :(err)=>{

        console.log(err);
      }
      
      
      
    }
  )
}







Client!: Observable<Array<Clients>>;
  
//Clients: Observable<Array<Clients>> | undefined;


  errorMessage! : string;
  searchformGroup! : FormGroup ;

constructor(private clientservice:ClientsService,
            private fb:FormBuilder
        ){

  }


  
  ngOnInit(): void {


    this.searchformGroup= this.fb.group({
      keyword : this.fb.control("")
    });
     this.loadClients();
     
     
     

  }
  loadClients() {
    this.Client = this.clientservice.getClients().pipe(
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

searchClients() {
  let kw = this.searchformGroup?.value.keyword;
  if (kw) {
    this.Client = this.clientservice.searchClient(kw).pipe(
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  } else {
    // Si le champ de recherche est vide, afficher tous les clients
    this.Client = this.clientservice.getClients().pipe(
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}


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

  


