import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppSubRoutes } from '../app.subroutes';
import * as CoreActions from './core.actions';

@Injectable()
export class CoreEffects {

  redirectCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.redirectCars),
      map(() => {
        console.log('redirect');
        void this.router.navigateByUrl(`/${AppSubRoutes.cars}`);
      })
    ),
  { dispatch: false }
  );

  showToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.showToast),
      map(async ({ toastText }) => {
        const toast = await this.toastController.create({
          message: toastText,
          duration: 2000
        });
        void toast.present();
      })
    ),
  { dispatch: false }
  );

  constructor(
    private readonly store: Store,
    private actions$: Actions,
    private router: Router,
    private toastController: ToastController,
  ) {}
}
