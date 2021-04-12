import { createAction, props } from '@ngrx/store';
import { Booking, Car, CarInfo } from 'openapi';

export const setCars = createAction('[cars] set cars', props<{cars: CarInfo[]}>());
export const setQuery = createAction('[cars] set query', props<{query: string}>());
export const loadAllCars = createAction('[cars] load all cars');
export const loadCarById = createAction('[cars] load item by id', props<{id: string}>());

export const bookCar = createAction('[cars] book car', props<{booking: Booking}>());
export const dismissCarModal = createAction('[cars] dismiss car modal');

export const setSelectedCar = createAction('[cars] set selected car', props<{car: Car}>());
export const resetSelectedItem = createAction('[cars] reset selected car');
