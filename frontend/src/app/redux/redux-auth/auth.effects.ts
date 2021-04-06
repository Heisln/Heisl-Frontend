import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.login.type),
  //     mergeMap((authReq: AuthenticationRequest) =>
  //       this.authService.apiV1LoginPost(authReq).pipe(
  //         map((resp) => AuthActions.loginSuccess({authRes: resp})),
  //         catchError((_err) => {
  //           const errorTest: CustomError = {code: 12, message: 'test'}; //TODO: change me
  //           const action = AuthActions.loginFailure({error: errorTest});
  //           return of(action);
  //         })
  //       )
  //     )
  //   )
  // );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.logout.type),
  //     map(() => AuthActions.logoutConfirmed())
  //   )
  // );

  constructor(
    private actions$: Actions
  ) {}
}
