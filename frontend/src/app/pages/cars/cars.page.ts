import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { CarInfo } from 'openapi';
import { Observable } from 'rxjs';
import { CarBookModalPage } from './car-book-modal/car-book-modal.page';
import * as ItemActions from './redux/cars.actions';
import * as fromItems from './redux/cars.reducer';

@Component({
  selector: 'app-items',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  cars$: Observable<CarInfo[]>;

  constructor(
    private store: Store,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.cars$ = this.store.select(fromItems.selectAllCars, { sortAttr: 'name' });
  }

  ionViewWillEnter() {
    this.makeCarRequest();
  }

  searchBarDidChange(event: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const query = event.detail.value as string;
    this.store.dispatch(ItemActions.setQuery({ query }));
    this.makeCarRequest();
  }

  makeCarRequest() {
    this.store.dispatch(ItemActions.loadAllCars());
  }

  async displayEditModal(car: CarInfo) {
    const modal = await this.modalController.create({
      component: CarBookModalPage,
      cssClass: 'car-book-modal',
      componentProps: {
        car
      },
    });
    return await modal.present();
  }
}
