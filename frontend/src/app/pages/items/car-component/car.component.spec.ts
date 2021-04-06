import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { mockCar1 } from '../items.testdata.spec';
import { CarComponent } from './car.component';

describe('ItemComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    component.car = mockCar1;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
