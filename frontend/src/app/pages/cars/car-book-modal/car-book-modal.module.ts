import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarBookModalPageRoutingModule } from './car-book-modal-routing.module';
import { CarBookModalPage } from './car-book-modal.page';
import { FormComponentModule } from 'src/app/reusables/form-components/form-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarBookModalPageRoutingModule,
    ReactiveFormsModule,
    FormComponentModule,
  ],
  declarations: [CarBookModalPage]
})
export class CarBookModalPageModule {}
