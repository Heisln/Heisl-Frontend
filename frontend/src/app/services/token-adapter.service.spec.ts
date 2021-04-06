import { TestBed } from '@angular/core/testing';
import { TokenAdapterService } from './token-adapter.service';

describe('TokenAdapterService', () => {
  let _service: TokenAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _service = TestBed.inject(TokenAdapterService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
