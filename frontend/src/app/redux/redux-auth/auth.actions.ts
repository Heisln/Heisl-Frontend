import { createAction, props } from '@ngrx/store';
import { AuthenticationRequest, AuthenticationResponse, User } from 'openapi';

export const login = createAction('[auth] login', props<{authReq: AuthenticationRequest}>());
export const register = createAction('[auth] register', props<{user: User}>());
export const setAuthResponse = createAction('[auth] set user', props<{authResp: AuthenticationResponse}>());
export const clearAuthResponse = createAction('[auth] clear user');
export const logout = createAction('[auth] logout');

