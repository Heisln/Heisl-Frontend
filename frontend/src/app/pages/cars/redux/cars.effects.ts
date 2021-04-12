import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CarService } from 'openapi';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as CarActions from './cars.actions';
import * as fromCars from './cars.reducer';
import * as CoreAction from '../../../redux/core.actions';
import { selectCurrentUserId } from 'src/app/redux/redux-auth/auth.reducer';

@Injectable()
export class CarEffects {
  loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarActions.loadAllCars),
      withLatestFrom(this.store.select(fromCars.selectQuery)),
      switchMap(([_type, query]) => this.carService.apiV1CarGet(query).pipe(
        map(cars => CarActions.setCars({ cars })),
        catchError(() => EMPTY)
      ))
    )
  );

  bookCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarActions.bookCar),
      withLatestFrom(this.store.select(selectCurrentUserId)),
      map(([{ booking: b }, userId]) => {
        const booking = { ...b };
        booking.userId = userId;
        return booking;
      }),
      switchMap(booking => this.carService.apiV1CarBookPost(booking).pipe(
        map(bookingResponse => CoreAction.showToast({ toastText: `Booked Car ${bookingResponse.car.brand} ${bookingResponse.car.name}` })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) { }
}
