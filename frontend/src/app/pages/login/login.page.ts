/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthenticationRequest } from 'openapi';
import * as AuthActions from '../../redux/redux-auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  didSubmitOnce = false;
  loginForm: FormGroup;

  constructor(
    private readonly store: Store,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLoginSubmit() {
    this.didSubmitOnce = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return;
    }
    const authReq = {
      email: this.loginForm.value.email as string,
      password: this.loginForm.value.password as string
    } as AuthenticationRequest;
    this.dispatchLoginAction(authReq);
  }

  autoLogin() {
    const authReq = { email: 'mail@mail.test', password: 'pwd' } as AuthenticationRequest;
    this.dispatchLoginAction(authReq);
  }

  dispatchLoginAction(authReq: AuthenticationRequest) {
    console.log('dispatch login action');
    this.store.dispatch(AuthActions.login({ authReq }));
    this.didSubmitOnce = false;
  }
}
