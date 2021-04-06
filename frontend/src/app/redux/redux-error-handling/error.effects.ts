import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as CoreActions from '../core.actions';
import * as ErrorActions from './error.actions';

// See https://ngrx.io/guide/effects

@Injectable()
export class ErrorEffects {
  errorsReported$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ErrorActions.raiseError),
        map((action) => {
          const httpError: HttpErrorResponse = action.err;
          console.error(httpError);
          if (httpError.status === 401) {
            void this.router.navigate([environment.loginUrl]);
            return CoreActions.noopAction();
          }
          return ErrorActions.setHttpError({ err: httpError });
        })
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
