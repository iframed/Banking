import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';

import { ClientsService } from '../services/clients.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.css']
})
export class NewClientsComponent implements OnInit  {
 

  newClientFormGroup! : FormGroup;
  errorMessage! : string;
  constructor(private fb : FormBuilder,
    private clientservice:ClientsService){}

  

   

  ngOnInit(): void {
    this.newClientFormGroup= this.fb.group({
     firstname : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      email :this.fb.control(null,[Validators.required,Validators.email])
    })
  }


  saveClient() {
    let client=this.newClientFormGroup.value
    this.clientservice.saveClients(client).subscribe(
      (data: any) => {
        // Traitez les données retournées si nécessaire
        alert("saved") //console.log("Client enregistré avec succès:", data);
      },
      (error: any) => {
        // Gérez les erreurs
        console.error("Erreur lors de l'enregistrement du client:", error);
        this.errorMessage = error.message;
      }
    );
    
    /*.pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );*/

    
}



  

}
