import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Car } from 'openapi';
import { compareObjectsByAttribute } from 'src/app/utils/util-methods';
import * as fromRoot from '../../../redux/core.reducer';
import * as ItemsActions from './cars.actions';

export const context = 'items';

export interface CarsState extends EntityState<Car> {
  query: string | null;
  selectedCar: Car;
}

export interface State extends fromRoot.State {
  [context]: CarsState;
}

// Read up on adapter Magic - worth it! https://ngrx.io/guide/entity/adapter
export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>();

const selectItemsState = createFeatureSelector<State, CarsState>(context);
const { selectAll } = adapter.getSelectors();

export const selectAllCars = createSelector(selectItemsState,
  (state: CarsState, props: { sortAttr: keyof Car }) =>
    selectAll(state).sort((p1, p2) => compareObjectsByAttribute(p1, p2, props.sortAttr))
);

export const selectQuery = createSelector(selectItemsState, (state: CarsState) => state.query);
export const selectSelectedCar = createSelector(selectItemsState, (state: CarsState) => state.selectedCar);

export const initialState: CarsState = {
  ...adapter.getInitialState(),
  query: null,
  selectedCar: null,
};

const _cardsReducer = createReducer(
  initialState,
  on(ItemsActions.setCars, (state, { cars }) => adapter.setAll(cars, state)),
  on(ItemsActions.setQuery, (state, { query }) => ({ ...state, query })),
  on(ItemsActions.setSelectedCar, (state, { car }) => ({ ...state, selectedCar: car })),
  on(ItemsActions.resetSelectedItem, (state) => ({ ...state, selectedItem: null })),
);

export function reducer(state: CarsState, action: Action): CarsState {
  return _cardsReducer(state, action);
}
