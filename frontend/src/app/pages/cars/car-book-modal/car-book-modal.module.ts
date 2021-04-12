import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBookModalPageRoutingModule } from './car-book-modal-routing.module';

import { CarBookModalPage } from './car-book-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarBookModalPageRoutingModule
  ],
  declarations: [CarBookModalPage]
})
export class CarBookModalPageModule {}
