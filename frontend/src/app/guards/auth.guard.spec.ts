import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let _guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
    });
    _guard = TestBed.inject(AuthGuard);
  });

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
