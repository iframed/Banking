import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompteBancaire } from '../models/compte-bancaire';

@Injectable({
  providedIn: 'root'
})
export class CompteServiceService {

  constructor(private http: HttpClient) { }

public getCompte(id:string , page: number, size:number):Observable<CompteBancaire>{

  return this.http.get<CompteBancaire>(`http://localhost:8085/auth/compte/${id}/pageOperations?page=${page}&size=${size}`);
}

public debits(id:string ,montant:number,description:string){

  let data={id ,montant,description}
  return this.http.post(`http://localhost:8085/auth/compte/debit`,data);
}

public credits(id:string , montant:number,description:string){
  let data={id ,montant,description}
  return this.http.post(`http://localhost:8085/auth/compte/credit`,data);
}

public transferts(compteSource:string,compteDestinataire:string,montant:number){
  let data={compteSource,compteDestinataire ,montant}
  return this.http.post(`http://localhost:8085/auth/compte/transfert`,data);
}





public saveComptecourantBancaires(solde: number, decouvert: number, id: number) {
  let compteCourantDto = {
    solde: solde,
    decouvert: decouvert,
    clientDto: {
      id: id
    }
  };

  console.log(compteCourantDto);

  return this.http.post("http://localhost:8085/auth/compte/newcompte", compteCourantDto);
}


public saveCompteEpargneBancaires(solde: number, Tauxinteret: number, id: number){
  let compteEpargneDto = {
    solde: solde,
    Tauxinteret:Tauxinteret,
    clientDto: {
      id: id
    }
  };
    console.log(compteEpargneDto);
  return this.http.post("http://localhost:8085/auth/compte/newcomptee", compteEpargneDto);

}










}
