import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CarService } from 'openapi';
import { CarApiService } from 'openapi/api/car-api.service';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as ItemActions from './cars.actions';
import * as fromItems from './cars.reducer';

@Injectable()
export class CarEffects {
  loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadAllCars),
      withLatestFrom(this.store.select(fromItems.selectQuery)),
      switchMap(([_type, query]) => this.carApiSerice.carGet(query).pipe(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        map(cars => ItemActions.setCars({ cars })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private carApiSerice: CarApiService,
    private store: Store
  ) {}
}
