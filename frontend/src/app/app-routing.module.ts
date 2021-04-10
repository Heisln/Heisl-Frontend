import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppSubRoutes } from './app.subroutes';
import { AuthGuard } from './guards/auth.guard';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  preloadingStrategy: PreloadAllModules,
};

const routes: Routes = [
  {
    path: '',
    redirectTo: AppSubRoutes.cars,
    pathMatch: 'full',
  },
  {
    path: AppSubRoutes.cars,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/items/cars.module').then((m) => m.CarPageModule),
  },
  {
    path: AppSubRoutes.login,
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: AppSubRoutes.bookings,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
