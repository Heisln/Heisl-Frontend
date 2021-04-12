import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CarService } from 'openapi';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as CarActions from './cars.actions';
import * as fromCars from './cars.reducer';

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

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private store: Store
  ) { }
}
