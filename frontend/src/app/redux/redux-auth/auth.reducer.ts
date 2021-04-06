import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromRoot from '../core.reducer';
import * as AuthActions from './auth.actions';

// TODO: error reporting may be implemented differently
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  // auth: AuthenticationResponse | null;
}

export const selectAuth = createFeatureSelector<fromRoot.State, State>('auth');
export const selectToken = createSelector(selectAuth, (state: State) => {
  // return state.auth?.token;
});

const initialState: State = {
  auth: null,
};

const _loginReducer: ActionReducer<State, Action> = createReducer(
  initialState,
  // on(AuthActions.loginSuccess, (state, {authRes}) => ({...state, auth: authRes})),
  on(AuthActions.logoutConfirmed, (_) => initialState)
);

export function reducer(state: State, action: Action): State {
  return _loginReducer(state, action);
}
