import { async, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';
import { FormCheckboxComponent } from './form-checkbox.component';


describe('FormCheckboxComponent', () => {
  let tester: ComponentTester<FormCheckboxComponent>;
  let mockStore: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormCheckboxComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormCheckboxComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });
});
