import { Car } from 'openapi';
import * as fromCars from './redux/cars.reducer';

export const mockCar1 = {
  brand: 'VW',
  name: 'Name2',
  horsepower: 140,
  consumption: 8,
  priceperday: 80,
} as Car;

export const mockCar2 = {
  brand: 'Porsche',
  name: 'Name2',
  horsepower: 400,
  consumption: 10,
  priceperday: 100,
} as Car;

export const mockItemsArray = [mockCar1, mockCar2];

const itemStateFilled = {
  ids: [mockCar1.id, mockCar2.id],
  entities: {
    [mockCar1.id]: mockCar1,
    [mockCar2.id]: mockCar2,
  },
} as fromCars.CarsState;

export const itemTestState = {
  [fromCars.context]: itemStateFilled
};
