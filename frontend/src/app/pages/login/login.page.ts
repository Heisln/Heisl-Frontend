import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    // this.store
    //   .select(selectToken)
    //   .pipe(
    //     map((token) => {
    //       if (token != null) {
    //         void this.router.navigate(['/']);
    //       }
    //       return new UserVM(token);
    //     })
    //   )
    //   .subscribe();
  }


  onLoginSubmit(): void {
    // this.store.dispatch(AuthActions.login(this.loginForm.value));
  }
}
