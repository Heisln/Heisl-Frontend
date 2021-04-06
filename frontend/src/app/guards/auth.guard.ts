import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenAdapterService } from '../services/token-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokAdapter: TokenAdapterService) {}
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const token = this.tokAdapter.getToken();
    // if (token != null) {
    //   return true;
    // } else {
    //   return this.router.parseUrl(environment.loginUrl);
    // }
    return true;
  }
}
