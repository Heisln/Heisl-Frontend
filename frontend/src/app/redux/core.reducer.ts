import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromAuth from './redux-auth/auth.reducer';

export interface State {
  [fromAuth.context]: fromAuth.State;
}

export const metaReducers: MetaReducer<any>[] = [debug, localStorageSyncReducer];
export const appReducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

// Meta reducers, called before actual reducers
// log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state ->', state, '\n action ->', action.type, action);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}
