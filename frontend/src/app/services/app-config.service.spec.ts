import { TestBed } from '@angular/core/testing';
import { AppConfigService } from './app-config.service';

describe('TokenAdapterService', () => {
  let _service: AppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _service = TestBed.inject(AppConfigService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
