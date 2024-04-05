import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService  {

 

  constructor(
    private http:HttpClient
  ) { }
 
  


  public getClients():Observable<Array<Clients>> {
    return this.http.get<Array<Clients>>("http://localhost:8085/auth/clients");
  }
  public searchClient(keyword:String):Observable<Array<Clients>>{
    return this.http.get<Array<Clients>>("http://localhost:8085/auth/clients/search?keyword="+keyword);
   
  }
  public saveClients(client:Clients):Observable<Clients> {
    return this.http.post<Clients>("http://localhost:8085/auth/ajouterclient",client);
  }
  public suprimerClients(id:number) {
    return this.http.delete("http://localhost:8085/auth/clients/"+id);
  }
  public updateClients(id:number, client:Clients ):Observable<Clients> {
    return this.http.put<Clients>("http://localhost:8085/auth/clients/"+id,client);
  }

  public getClientsById(id:number):Observable<Clients> {
    return this.http.get<Clients>(`http://localhost:8085/auth/clientid/${id}`);
  }
 
}
