import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const handleError = createAction('[error] handle error', props<{httpError: HttpErrorResponse; reduxCtx: string}>());
export const raiseError = createAction('[error] raise error', props<{err: HttpErrorResponse}>());
export const setHttpError = createAction('[error] set http error', props<{err: HttpErrorResponse}>());
