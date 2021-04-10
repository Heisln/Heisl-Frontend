import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  // This interceptor currently holds the error handling logic.
  // A toast emitter located in APpComponent is receiving the error value and displaying it.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          console.log('Error intercepted');
          // TODO: test this.router.url with baseurl!
          if (error.status === 401 && this.router.url !== environment.loginUrl ) {
            console.log(this.router.url);
            // this.store.dispatch(AuthActions.clearUser());
            // this.store.dispatch(CoreActions.redirectLogin());
          } else {
            console.log(error);
          }
        }
        return throwError(error);
      })
    );
  }
}
