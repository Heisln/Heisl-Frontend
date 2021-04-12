import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPage } from './cars.page';

const routes: Routes = [
  {
    path: '',
    component: CarsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
