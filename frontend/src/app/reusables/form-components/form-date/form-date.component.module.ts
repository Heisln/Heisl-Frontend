import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormDateComponent } from './form-date.component';
import { FormErrorListComponentModule } from '../form-error-list/form-error-list.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormErrorListComponentModule,
  ],
  declarations: [FormDateComponent],
  exports: [FormDateComponent],
})
export class FormDateComponentModule { }
