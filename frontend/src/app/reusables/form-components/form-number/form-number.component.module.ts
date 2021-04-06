import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormErrorListComponentModule } from '../form-error-list/form-error-list.component.module';
import { FormNumberComponent } from './form-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormErrorListComponentModule,
  ],
  declarations: [FormNumberComponent],
  exports: [FormNumberComponent],
})
export class FormNumberComponentModule {}
