import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteServiceService } from '../services/compte-service.service';
import { Observable } from 'rxjs';
import { CompteBancaire, OperationDto } from '../models/compte-bancaire';
@Component({
  selector: 'app-comptebancaire',
  templateUrl: './comptebancaire.component.html',
  styleUrls: ['./comptebancaire.component.css']
})
export class ComptebancaireComponent implements OnInit{
operationCompte() {


let id :string= this.compteFormGroup.value.id;
let montant:number=this.operationFormGroup.value.montant;
let description:string=this.operationFormGroup.value.description;
let compteDestinataire:string=this.operationFormGroup.value.compteDestinataire;
let typeOperation =this.operationFormGroup.value.operationType;

if(typeOperation== 'Debit')
{
  this.compteService.debits(id,montant,description).subscribe({
    next:(data)=>{
      console.log(data);
    },
    error:(err)=>{
      console.log(err);
    }
  })

}else if(typeOperation=='Credit'){

  this.compteService.credits(id,montant,description).subscribe({
    next:(data)=>{
      console.log(data);
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
else if(typeOperation=='transfert'){
  this.compteService.transferts(id, compteDestinataire,montant).subscribe({
    next:(data)=>{
      console.log(data);
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
return null;
}



gotopage(page: number) {
this.pageactuelle=page;
this.chercherCompte();
}



goToPage(page: number) {
  // Implémentez la logique pour naviguer vers la page spécifiée
  console.log('Naviguer vers la page', page);
  this.pageactuelle=page;
this.chercherCompte();
}


  pageactuelle: number=0;
  pagesize:number=55;
  
  compteFormGroup! : FormGroup;
  operationFormGroup!: FormGroup;
  compte!: Observable<CompteBancaire>;

  


constructor(private fb:FormBuilder,
             private compteService : CompteServiceService){}
  ngOnInit(): void {
    this.compteFormGroup=this.fb.group({

      id: this.fb.control("")
    });
    this.operationFormGroup=this.fb.group({
      operationType: this.fb.control("null"),
      montant:this.fb.control(0,),
      description:this.fb.control("null"),
      compteDestinataire:this.fb.control(""),

    })
  }


chercherCompte() {

let id: string=this.compteFormGroup.value.id;
console.log(id)
this.compte= this.compteService.getCompte(id,this.pageactuelle,this.pagesize);


}


  

}
