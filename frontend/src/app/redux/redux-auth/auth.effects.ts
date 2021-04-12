import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'openapi';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as CoreActions from '../core.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ authReq }) => this.userSerivce.apiV1UserLoginPost(authReq).pipe(
        map(authResp => AuthActions.setAuthResponse({ authResp })),
        catchError(() => EMPTY))
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      mergeMap(() => of(
        AuthActions.clearAuthResponse(),
        CoreActions.redirectLogin())
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userSerivce: UserService,
  ) { }
}
