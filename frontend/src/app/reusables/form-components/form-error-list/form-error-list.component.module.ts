import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormErrorListComponent } from './form-error-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [FormErrorListComponent],
  exports: [FormErrorListComponent],
})
export class FormErrorListComponentModule { }
