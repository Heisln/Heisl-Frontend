import { async, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';

import { FormToggleComponent } from './form-toggle.component';

describe('FormToggleComponent', () => {
  let tester: ComponentTester<FormToggleComponent>;
  let mockStore: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormToggleComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormToggleComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });
});
