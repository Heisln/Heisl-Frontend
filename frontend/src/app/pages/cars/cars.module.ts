import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CarBookModalPageModule } from './car-book-modal/car-book-modal.module';
import { CarComponent } from './car-component/car.component';
import { ItemsPageRoutingModule } from './cars-routing.module';
import { CarsPage } from './cars.page';
import { CarEffects } from './redux/cars.effects';
import * as fromCars from './redux/cars.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    StoreModule.forFeature(fromCars.context, fromCars.reducer),
    EffectsModule.forFeature([CarEffects]),
    CarBookModalPageModule,
  ],
  declarations: [CarsPage, CarComponent],
})
export class CarPageModule {}
