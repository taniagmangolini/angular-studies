import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //request: An HttpRequest object that indicates the current request
    //next: An HttpHandler object that denotes the next interceptor in the chain
    //The purest form of an interceptor is to delegate requests to the next interceptor using the handle method. 
    //The order in which we import interceptors in our Angular module matters.
    //This interceptor will be used to set a token in all http requests.
    const authReq = request.clone({
      setHeaders: { Authorization: 'someToken' }
    }); 
    return next.handle(authReq);
  }
}