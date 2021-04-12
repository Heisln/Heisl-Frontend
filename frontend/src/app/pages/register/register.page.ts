/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'openapi';
import * as AuthActions from '../../redux/redux-auth/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  didSubmitOnce = false;
  registerFormGroup: FormGroup;

  constructor(
    private readonly store: Store,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }

  onRegisterSubmit() {
    this.didSubmitOnce = true;
    if (!this.registerFormGroup.valid) {
      console.log('Please provide all the required values!');
      return;
    }
    const user = {
      email: this.registerFormGroup.value.email as string,
      password: this.registerFormGroup.value.password as string,
      firstname: this.registerFormGroup.value.firstname as string,
      lastname: this.registerFormGroup.value.lastname as string,
      birthday: this.registerFormGroup.value.birthday as string,
    } as User;
    console.log('register plx');
    this.store.dispatch(AuthActions.register({ user }));
    this.didSubmitOnce = false;
  }
}
