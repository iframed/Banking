import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteServiceService } from '../services/compte-service.service';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css']
})
export class NewCompteComponent implements OnInit {


  constructor(private fb: FormBuilder, private compteService: CompteServiceService) { }

  compteCourantForm!: FormGroup;
  compteEpargneForm!: FormGroup;

ngOnInit(): void {
  this.compteCourantForm= this.fb.group({
    solde : this.fb.control(null,[Validators.required]),
    decouvert :this.fb.control(null,[Validators.required]),
    id :this.fb.control(null,[Validators.required])
  });
  this.compteEpargneForm=this.fb.group({
    solde: this.fb.control(null,[Validators.required]),
    Tauxinteret: this.fb.control(null,[Validators.required]),
    id: this.fb.control(null,[Validators.required])
  });

}
saveComptecourantBancaire() {
 let compteCourant= this.compteCourantForm.value;
  if (this.compteCourantForm.valid) {
    this.compteService.saveComptecourantBancaires(compteCourant.solde, compteCourant.decouvert,compteCourant.id)
      .subscribe({
        next:(data: any)=>{
          console.log(data)
        },
        error:(err: any)=>{
          console.log(err);
        }
      });
  }
}
saveCompteEpargneBancaire() {

  let  compteEpargne= this.compteEpargneForm.value;

  if(this.compteEpargneForm.valid){
    this.compteService.saveCompteEpargneBancaires(compteEpargne.solde, compteEpargne.Tauxinteret ,compteEpargne.id).subscribe({
      next:(data: any)=>{
        console.log(data)
      },
      error:(err: any)=>{
        console.log(err);
      }
    });
  }

  
}



}
  
 


    
    
  
  

