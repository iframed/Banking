import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  handlelogout() {
   this.isAuthenticated=false;
   this.accessToken=undefined;
   this.email=undefined;
   this.roles=undefined;
  }

  isAuthenticated : boolean=false;
  roles : any;
  email : any;
  accessToken! : any;


loadProfile(data: any) {

  this.isAuthenticated= true;
  this.accessToken = data['access-token'];
  console.log("Access token:", this.accessToken);
  let decodedJwt : any = jwtDecode(this.accessToken);
  this.email = decodedJwt.sub;
  this.roles = decodedJwt.scope;
  
 
}

constructor(private http:HttpClient){}

public login(email : string, password :string){


  let params = new HttpParams().set("email",email).set("password", password);
  let options = {
    headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
  }    
                  
 
  return this.http.post("http://localhost:8085/auth/login", params , options )

}



}
