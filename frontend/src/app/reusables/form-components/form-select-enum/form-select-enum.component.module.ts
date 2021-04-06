import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormSelectEnumComponent } from './form-select-enum.component';
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
  declarations: [FormSelectEnumComponent],
  exports: [FormSelectEnumComponent],
})
export class FormSelectEnumComponentModule { }
