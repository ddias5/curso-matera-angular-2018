import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { RequestErrorComponent } from './request-error.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class RequestErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .do((event: HttpEvent<any>) => { }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.openDialog({});
          if (err.status === 401) {
            this.openDialog({});
          }
        } else {
          // zzz
        }
      });
  }

  private openDialog(info) {
    this.dialog.open(RequestErrorComponent, {
      data: info
    });
  }
}
