import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { AppSubRoutes } from './app.subroutes';
import { UserVM } from './models/user.view-model';
import * as AuthActions from './redux/redux-auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 1;
  public version = environment.version;
  public user$: Observable<UserVM>;
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
    // this.user$ = this.store.select(selectToken).pipe(map((token) => new UserVM(token)));
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
  }

  navigateExternal(url: string): boolean {
    window.location.href = url;
    return false;
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
