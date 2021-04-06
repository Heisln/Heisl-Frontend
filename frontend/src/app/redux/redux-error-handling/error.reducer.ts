import { HttpErrorResponse } from '@angular/common/http';
import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CustomError } from 'src/app/models/custom-error.model';
import * as fromRoot from '../core.reducer';
import * as ErrorActions from './error.actions';

// TODO: error reporting may be implemented differently
export interface State {
  httpError: HttpErrorResponse | null;
  customError: CustomError | null;
}

export const selectError = createFeatureSelector<fromRoot.State, State>('error');
export const selectHttpError = createSelector(selectError, (state: State) => state.httpError);
export const selectCustomError = createSelector(selectError, (state: State) => state.customError);

const initialState: State = {
  httpError: null,
  customError: null,
};

const _errorReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  on(ErrorActions.setHttpError, (state, { err }) => ({ ...state, httpError: err }))
);

export function reducer(state: State, action: Action): State {
  return _errorReducer(state, action);
}
