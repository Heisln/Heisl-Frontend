import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'openapi';
import { EMPTY, of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as CoreActions from '../core.actions';

@Injectable()
export class AuthEffects {

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ user }) => this.userSerivce.apiV1UserRegistrationPost(user).pipe(
        switchMap(authResp => [
          AuthActions.setAuthResponse({ authResp }),
          CoreActions.showToast({ toastText: `Successfully created user ${user.email}` }),
          CoreActions.redirectCars(),
        ]),
        catchError(() => EMPTY))
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ authReq }) => this.userSerivce.apiV1UserLoginPost(authReq).pipe(
        switchMap(authResp => [
          AuthActions.setAuthResponse({ authResp }),
          CoreActions.redirectCars(),
        ]),
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
