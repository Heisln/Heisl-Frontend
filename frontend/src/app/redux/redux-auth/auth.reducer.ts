import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AuthenticationResponse } from 'openapi';
import * as fromRoot from '../core.reducer';
import * as AuthActions from './auth.actions';

export const context = 'auth';

export interface State {
  authResp: AuthenticationResponse | null;
}

export const selectAuth = createFeatureSelector<fromRoot.State, State>(context);
export const selectUser = createSelector(selectAuth, (state: State) => state.authResp);
export const selectToken = createSelector(selectAuth, (state: State) => state.authResp.token);

const initialState: State = {
  authResp: null,
};

const _loginReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  on(AuthActions.setAuthResponse, (state, { authResp }) => ({ ...state, authResp })),
  on(AuthActions.clearAuthResponse, (state) => ({ ...state, ...initialState }))
);

export function reducer(state: State, action: Action): State {
  return _loginReducer(state, action);
}
