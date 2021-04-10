import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';

import { FormErrorListComponent } from './form-error-list.component';

describe('FormErrorListComponent', () => {
  let tester: ComponentTester<FormErrorListComponent>;
  let mockStore: MockStore<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        FormErrorListComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormErrorListComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });
});
