import { createAction, props } from '@ngrx/store';

export const redirectLogin = createAction('[core] redirect to login');
export const redirectCars = createAction('[core] redirect to cars');
export const showToast = createAction('[core] show Toast', props<{toastText: string}>());
