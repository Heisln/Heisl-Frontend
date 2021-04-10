import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.login.type),
  //     switchMap(({ authReq }) =>
  //       this.authService.apiV1IdentityLoginPost(authReq).pipe(
  //         switchMap((resp) => of(
  //           AuthActions.setUser({ tokenInfo: tokenInfoAPItoVS(resp.token) }),
  //           CoreActions.redirectLastRequestedRoute())
  //         ),
  //         catchError(() => of(AuthActions.clearUser()))
  //       )
  //     )
  //   )
  // );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.logout),
  //     mergeMap(() => of(AuthActions.clearUser(), CoreActions.redirectLogin()))
  //   )
  // );

  constructor(
    private actions$: Actions,
  ) { }
}
