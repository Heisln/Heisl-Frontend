/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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
  bookingFormGroup: FormGroup;
  didSubmitOnce = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private modalcontroller: ModalController,
  ) { }

  ngOnInit() {
    this.setupBookingFormGroup();
  }

  setupBookingFormGroup() {
    this.bookingFormGroup = this.formBuilder.group({
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
  }

  bookCar() {
    this.didSubmitOnce = true;
    if (!this.bookingFormGroup.valid) {
      console.log('Please provide all the required values!');
      return;
    }
    const booking = {
      carId: this.car.id,
      startDate: this.bookingFormGroup.value.startDate as string,
      endDate: this.bookingFormGroup.value.endDate as string,
    } as Booking;
    this.store.dispatch(CarsActions.bookCar({ booking }));
    this.dismiss();
  }

  dismiss() {
    void this.modalcontroller.dismiss({
      dismissed: true
    });
  }
}
