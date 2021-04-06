import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Configuration } from 'openapi';
import { ApiModule } from '../../openapi/api.module';
import { BASE_PATH } from '../../openapi/variables';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxModule } from './redux/core.module';
import { TokenAdapterService } from './services/token-adapter.service';

export function openapiConfigFactory(tokAdapter: TokenAdapterService): Configuration {
  const cfg = new Configuration({
    credentials: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      api_key: () => {
        const tok = '';// tokAdapter.getToken();
        if (tok == null) {
          return undefined;
        }
        return 'Bearer ' + tok;
      },
    },
    withCredentials: true,
  });
  return cfg;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    ReduxModule.forRoot(),
    ApiModule, // TODO: should we move this to RxCoreModule to enforce proper use of effect rather than direct API calls?
    HttpClientModule, // TODO: same as above
    StoreDevtoolsModule.instrument({ name: 'nap', maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: BASE_PATH, useValue: environment.apiBasePath },
    { provide: Configuration, useFactory: openapiConfigFactory, deps: [TokenAdapterService], multi: false },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
