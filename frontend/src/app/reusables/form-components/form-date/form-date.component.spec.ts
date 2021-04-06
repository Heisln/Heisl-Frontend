import { async, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';

import { FormDateComponent } from './form-date.component';

describe('FormDateComponent', () => {
  let tester: ComponentTester<FormDateComponent>;
  let mockStore: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormDateComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormDateComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });
});
