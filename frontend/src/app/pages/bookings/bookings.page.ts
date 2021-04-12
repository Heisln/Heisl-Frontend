import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Booking } from 'openapi';
import { Observable } from 'rxjs';
import * as fromBookings from './redux/bookings.reducer';
import * as BookingActions from './redux/bookings.actions';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings$: Observable<Booking[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.bookings$ = this.store.select(fromBookings.selectAllBookings, { sortAttr: 'name' });
    this.store.dispatch(BookingActions.loadMyBookings());
  }

  cutTime(datetime: string): string {
    return cutTimeFromDate(datetime);
  }

  returnBooking(bookingId: string) {
    this.store.dispatch(BookingActions.returnCar({ bookingId }));
  }
}

export const cutTimeFromDate = (date: string): string => (date) ? date.split('T')[0] : '';
