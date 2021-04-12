import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CarsPage } from './cars.page';
import { itemTestState } from './cars.testdata.spec';

describe('CarsPage', () => {
  let component: CarsPage;
  let fixture: ComponentFixture<CarsPage>;

  beforeEach(waitForAsync(() => {
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
