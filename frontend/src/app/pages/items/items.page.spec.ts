import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CarsPage } from './cars.page';
import { itemTestState } from './items.testdata.spec';

describe('ItemsPage', () => {
  let component: CarsPage;
  let fixture: ComponentFixture<CarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState: itemTestState })
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
