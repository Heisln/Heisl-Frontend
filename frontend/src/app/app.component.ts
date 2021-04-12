/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Currency } from 'openapi';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { AppSubRoutes } from './app.subroutes';
import * as AuthActions from './redux/redux-auth/auth.actions';
import * as fromAuth from './redux/redux-auth/auth.reducer';
import * as CarActions from './pages/cars/redux/cars.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedIndex = 1;
  version = environment.version;
  userId$: Observable<string>;
  values = Object.values;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  currencyEnum = Currency;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  defaultCurrency = Currency.Usd;
  public appPages = [
    {
      title: 'Cars',
      url: '/' + AppSubRoutes.cars,
      icon: 'car-sport',
    },
    {
      title: 'Bookings',
      url: '/' + AppSubRoutes.bookings,
      icon: 'book',
    },
    {
      title: 'Login',
      url: '/' + AppSubRoutes.login,
      icon: 'log-in',
    },
    {
      title: 'Register',
      url: '/' + AppSubRoutes.register,
      icon: 'log-in',
    },
    {
      title: 'Google Maps',
      url: '/' + AppSubRoutes.googleMaps,
      icon: 'map',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private readonly store: Store
  ) {
    this.initializeApp();
  }

  initializeApp(): void {
    void this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedIndex = this.appPages.findIndex((page) =>
          event.urlAfterRedirects.toLowerCase().includes(page.title.toLowerCase())
        );
      }
    });

    this.userId$ = this.store.select(fromAuth.selectCurrentUserId);
  }

  navigateExternal(url: string): boolean {
    window.location.href = url;
    return false;
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  currencyChanged(event: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const currency = event.detail.value as Currency;
    this.store.dispatch(CarActions.setCurrency({ currency }));
    this.store.dispatch(CarActions.loadAllCars());
  }

  isLoggedIn(): boolean {
    let isloggedin = false;
    this.userId$.pipe(take(1)).subscribe(id => isloggedin = id == null);
    return isloggedin;
  }
}
