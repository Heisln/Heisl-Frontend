import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingsPageRoutingModule } from './bookings-routing.module';
import { BookingsPage } from './bookings.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBookings from './redux/bookings.reducer';
import { BookingEffects } from './redux/bookings.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsPageRoutingModule,
    StoreModule.forFeature(fromBookings.context, fromBookings.reducer),
    EffectsModule.forFeature([BookingEffects]),
  ],
  declarations: [BookingsPage]
})
export class BookingsPageModule {}
