/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Configuration } from 'openapi';
import * as fromAuth from '../redux/redux-auth/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private currentToken: string;

  constructor(
    private openAPIConfig: Configuration,
    private store: Store,
  ) {
    this.setupTokenSubscription();
  }

  setupTokenSubscription() {
    this.currentToken = null;
    // Openapi setup
    this.openAPIConfig.withCredentials = true;
    this.openAPIConfig.credentials = {
      Bearer: undefined
    };
    // Token subscription
    this.store.select(fromAuth.selectToken).subscribe(token => {
      console.log('tokeDidSet', token);
      this.currentToken = token;
      this.openAPIConfig.credentials = {
        Bearer: ('Bearer ' + token) ?? undefined
      };
    });
  }

  public getToken(): string {
    return this.currentToken;
  }

  public getAPIBaseURL(): string {
    return this.openAPIConfig.basePath;
  }
}

export interface AppConfig {
  apiBaseurl: string;
}
