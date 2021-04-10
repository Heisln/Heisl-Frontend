import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromRoot from '../core.reducer';
import * as AuthActions from './auth.actions';

export const context = 'auth';

export interface State {
  tokenInfo: TokenInfo | null; // Do not replace with context string, this is a nested step
}

export const selectAuth = createFeatureSelector<fromRoot.State, State>(context);
export const selectUser = createSelector(selectAuth, (state: State) => state.tokenInfo);
export const selectToken = createSelector(selectAuth, (state: State) => state.tokenInfo?.token);

const initialState: State = {
  tokenInfo: null,
};

const _loginReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  on(AuthActions.setUser, (state, { tokenInfo }) => ({ ...state, tokenInfo })),
  on(AuthActions.clearUser, (state) => ({ ...state, ...initialState }))
);

export function reducer(state: State, action: Action): State {
  return _loginReducer(state, action);
}

export interface TokenInfo {
  userId: string;
  token: string;
  email: string;
  role: string;
}
