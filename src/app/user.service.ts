import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<any> {
    const formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('password', user.password);

     
   //'Content-Type', 'application/x-www-form-urlencoded'
     

    const options = {
      headers: new HttpHeaders()
    };
    
    return this.http.post('http://localhost:8085/auth/save', formData, options);
  }
}
