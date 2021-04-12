import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Booking, CarInfo } from 'openapi';
import * as CarsActions from '../redux/cars.actions';

@Component({
  selector: 'app-car-book-modal',
  templateUrl: './car-book-modal.page.html',
  styleUrls: ['./car-book-modal.page.scss'],
})
export class CarBookModalPage implements OnInit {

  @Input() car: CarInfo;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() { }

  bookCar() {
    const booking = { } as Booking;
    this.store.dispatch(CarsActions.bookCar({ booking }));
  }
}
