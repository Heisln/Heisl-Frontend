import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentTester } from 'src/app/testing/component-tester.class.spec';
import { FormTextComponent } from './form-text.component';


describe('FormTextComponent', () => {
  let tester: ComponentTester<FormTextComponent>;
  let mockStore: MockStore<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        FormTextComponent,
        provideMockStore({
          selectors: []
        })
      ]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    tester = new ComponentTester(FormTextComponent, mockStore);
  }));

  it('should create', () => {
    tester.runCreateSpec('subscriptions');
  });

  it('should put all subscriptions into the sub list in ngOnInit()', () => {
    tester.runSubscriptionCountSpec('subscriptions');
  });

});
