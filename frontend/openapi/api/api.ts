export * from './car.service';
import { CarService } from './car.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CarService, UserService];
