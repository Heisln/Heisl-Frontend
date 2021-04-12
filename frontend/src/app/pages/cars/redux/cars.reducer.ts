/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Car, CarInfo, Currency } from 'openapi';
import { compareObjectsByAttribute } from 'src/app/utils/util-methods';
import * as fromRoot from '../../../redux/core.reducer';
import * as CarsActions from './cars.actions';

export const context = 'car';

export interface CarsState extends EntityState<Car> {
  query: string | null;
  selectedCar: Car;
  currency: Currency;
}

export interface State extends fromRoot.State {
  [context]: CarsState;
}

// Read up on adapter Magic - worth it! https://ngrx.io/guide/entity/adapter
export const adapter: EntityAdapter<CarInfo> = createEntityAdapter<CarInfo>();

const selectItemsState = createFeatureSelector<State, CarsState>(context);
const { selectAll } = adapter.getSelectors();

export const selectAllCars = createSelector(selectItemsState,
  (state: CarsState, props: { sortAttr: keyof CarInfo }) =>
    selectAll(state).sort((p1, p2) => compareObjectsByAttribute(p1, p2, props.sortAttr))
);

export const selectQuery = createSelector(selectItemsState, (state: CarsState) => state.query);
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export const selectCurrency = createSelector(selectItemsState, (state: CarsState) => state.currency);
export const selectSelectedCar = createSelector(selectItemsState, (state: CarsState) => state.selectedCar);

export const initialState: CarsState = {
  ...adapter.getInitialState(),
  query: null,
  selectedCar: null,
  currency: null,
};

const _cardsReducer = createReducer(
  initialState,
  on(CarsActions.setCars, (state, { cars }) => adapter.setAll(cars, state)),
  on(CarsActions.setQuery, (state, { query }) => ({ ...state, query })),
  on(CarsActions.setSelectedCar, (state, { car }) => ({ ...state, selectedCar: car })),
  on(CarsActions.resetSelectedItem, (state) => ({ ...state, selectedItem: null })),
  on(CarsActions.setCurrency, (state, { currency }) => ({ ...state, currency })),
);

export function reducer(state: CarsState, action: Action): CarsState {
  return _cardsReducer(state, action);
}
