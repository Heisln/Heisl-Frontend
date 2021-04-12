import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarBookModalPage } from './car-book-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CarBookModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarBookModalPageRoutingModule {}
