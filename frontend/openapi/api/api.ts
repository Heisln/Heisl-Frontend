export * from './booking.service';
import { BookingService } from './booking.service';
export * from './car.service';
import { CarService } from './car.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [BookingService, CarService, UserService];
