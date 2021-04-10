import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';
import { FormNumberComponent } from './form-number.component';


describe('FormNumberComponent', () => {
  let tester: ComponentTester<FormNumberComponent>;
  let mockStore: MockStore<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        FormNumberComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormNumberComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });

});
