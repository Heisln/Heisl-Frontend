import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormErrorListComponentModule } from '../form-error-list/form-error-list.component.module';
import { FormTextComponent } from './form-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormErrorListComponentModule,
  ],
  declarations: [FormTextComponent],
  exports: [FormTextComponent],
})
export class FormTextComponentModule {}
