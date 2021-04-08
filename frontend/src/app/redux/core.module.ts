import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreEffects } from './core.effects';
import { appReducers, metaReducers } from './core.reducer';
import { AuthEffects } from './redux-auth/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([CoreEffects, AuthEffects]),
  ],
  declarations: [],
})

// read about for singletons forRoot()
// https://angular.io/guide/singleton-services
export class ReduxModule {
  constructor(@Optional() @SkipSelf() parentModule: ReduxModule) {
    if (parentModule) {
      throw new Error('ReduxModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<ReduxModule> {
    return {
      ngModule: ReduxModule,
    };
  }
}

// NgRx forRoot vs forFeature
// https://stackoverflow.com/a/61889265/13087977
// in short use feature only for lazy loaded modules and only if it's used in a specific case
// for most cases just work with this ReduxModule
