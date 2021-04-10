import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let statusBarSpy: jasmine.SpyObj<StatusBar>;
  let splashScreenSpy: jasmine.SpyObj<SplashScreen>;
  let platformReadySpy: jasmine.SpyObj<Promise<void>>;
  let platformSpy: jasmine.SpyObj<Platform>;

  beforeEach(waitForAsync(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']) as jasmine.SpyObj<StatusBar>;
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']) as jasmine.SpyObj<SplashScreen>;
    platformReadySpy = Promise.resolve() as jasmine.SpyObj<Promise<void>>;
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy }) as jasmine.SpyObj<Platform>;

    // compileComponents() call only needed if not testing from the CLI ng test command. We'll keep it there for now.
    void TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot({})],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
