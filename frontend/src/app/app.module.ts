import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { ReduxModule } from './redux/core.module';
import { AppConfigService } from './services/token-adapter.service';

export function appInitializerFn(_appConfig: AppConfigService) {
  // Do any further init
  // rn the init we need is in the init of AppConfigService!
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
    StoreDevtoolsModule.instrument({ name: 'heisln', maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: BASE_PATH, useValue: environment.apiBasePath },
    { provide: Configuration, useFactory: () => new Configuration(), multi: false },
    { provide: APP_INITIALIZER, useFactory: () => appInitializerFn, deps: [AppConfigService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
