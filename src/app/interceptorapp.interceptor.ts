import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class InterceptorappInterceptor implements HttpInterceptor {
  constructor(private auth :AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<unknown>> {
     
    if (!request.url.includes("/auth/login")&&!request.url.includes("/auth/save")&&!request.url.includes("/emails")){

     let newreq = request.clone({
      
     //headers : request.headers.set('Authorization','Bearer' + this.authService2.accessToken)
     setHeaders: {
       Authorization: `Bearer ${this.auth.accessToken}`
     }

    })
    return next.handle(newreq);
    }
    else return next.handle(request);
    
   

   
 }
}
