import { createAction, props } from '@ngrx/store';
import { AuthenticationRequest } from 'openapi';
import { TokenInfo } from './auth.reducer';

export const login = createAction('[auth] login', props<{authReq: AuthenticationRequest}>());
export const setUser = createAction('[auth] set user', props<{tokenInfo: TokenInfo}>());
export const clearUser = createAction('[auth] clear user');
export const logout = createAction('[auth] logout');

