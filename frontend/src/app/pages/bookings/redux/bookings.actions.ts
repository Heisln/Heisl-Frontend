import { createAction, props } from '@ngrx/store';
import { Booking } from 'openapi';

export const loadMyBookings = createAction('[bookings] load my bookings');
export const setMyBookings = createAction('[bookings] set my bookings', props<{bookings: Booking[]}>());
export const returnCar = createAction('[bookings] return car', props<{bookingId: string}>());
