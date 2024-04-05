import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  public getUsers():Observable<Array<User>> {
    return this.http.get<Array<User>>("http://localhost:8085/auth/users");
  }

  // Méthode pour mettre à jour les rôles de l'utilisateur
  public updateUserRoles(id: number, newRoles: string[]): Observable<any> {
    // Vous pouvez ajuster l'URL et les paramètres selon votre API
    const url = `http://localhost:8085/auth/${id}/roles`;
    return this.http.put(url, newRoles);
  }
 
}
