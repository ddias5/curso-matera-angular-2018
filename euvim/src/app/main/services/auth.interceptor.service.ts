import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let item = JSON.parse(sessionStorage.getItem('access'));
    let validacao = item && item.access_token != null;
    if (validacao) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${item.access_token}`
        }
      })
    }
    return next.handle(request);
  }

}
