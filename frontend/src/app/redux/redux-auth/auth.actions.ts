import { createAction, props } from '@ngrx/store';
import { CustomError } from '../../models/custom-error.model';

// export const login = createAction('[auth] login', props<{authReq: AuthenticationRequest}>());
// export const loginSuccess = createAction('[auth] login success', props<{authRes: AuthenticationResponse}>());
export const loginFailure = createAction('[auth] login failure', props<{error: CustomError}>());
export const logout = createAction('[auth] logout');
export const logoutConfirmed = createAction('[auth] logout confirmed');
