import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPage } from './cars.page';

const routes: Routes = [
  {
    path: '',
    component: CarsPage,
  },
  {
    path: 'car-book-modal',
    loadChildren: () => import('./car-book-modal/car-book-modal.module').then( m => m.CarBookModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
