import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'openapi';
import { Observable } from 'rxjs';
import * as ItemActions from './redux/cars.actions';
import * as fromItems from './redux/cars.reducer';

@Component({
  selector: 'app-items',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  cars$: Observable<Car[]>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.cars$ = this.store.select(fromItems.selectAllCars, { sortAttr: 'name' });
    this.makeItemQueryRequest();
  }

  searchBarDidChange(event: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const query = event.detail.value as string;
    this.store.dispatch(ItemActions.setQuery({ query }));
    this.makeItemQueryRequest();
  }

  makeItemQueryRequest() {
    this.store.dispatch(ItemActions.loadAllCars());
  }
}
