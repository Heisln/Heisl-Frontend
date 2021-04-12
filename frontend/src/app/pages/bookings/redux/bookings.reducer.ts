import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Booking } from 'openapi';
import { compareObjectsByAttribute } from 'src/app/utils/util-methods';
import * as fromRoot from '../../../redux/core.reducer';
import * as BookingActions from './bookings.actions';

export const context = 'bookings';

export interface BookingState extends EntityState<Booking> {
  query: string | null;
}

export interface State extends fromRoot.State {
  [context]: BookingState;
}

export const adapter: EntityAdapter<Booking> = createEntityAdapter<Booking>();

const selectItemsState = createFeatureSelector<State, BookingState>(context);
const { selectAll } = adapter.getSelectors();

export const selectAllBookings = createSelector(selectItemsState,
  (state: BookingState, props: { sortAttr: keyof Booking }) =>
    selectAll(state).sort((p1, p2) => compareObjectsByAttribute(p1, p2, props.sortAttr))
);

export const selectQuery = createSelector(selectItemsState, (state: BookingState) => state.query);

export const initialState: BookingState = {
  ...adapter.getInitialState(),
  query: null,
};

const _bookingsReducer = createReducer(
  initialState,
  on(BookingActions.setMyBookings, (state, { bookings }) => adapter.setAll(bookings, state)),
);

export function reducer(state: BookingState, action: Action): BookingState {
  return _bookingsReducer(state, action);
}
