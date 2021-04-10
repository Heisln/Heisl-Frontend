import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';
import { FormSelectEnumComponent } from './form-select-enum.component';

describe('FormSelectEnumComponent', () => {
  let tester: ComponentTester<FormSelectEnumComponent>;
  let mockStore: MockStore<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        FormSelectEnumComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormSelectEnumComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });
});
