import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormToggleComponent } from './form-toggle.component';
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
  declarations: [FormToggleComponent],
  exports: [FormToggleComponent],
})
export class FormToggleComponentModule { }
