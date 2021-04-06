import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TokenAdapterService {
  private currentToken: string = null;

  // constructor(private readonly store: Store) {
  //   this.store
  //     .select(selectToken)
  //     .pipe(
  //       map((token) => {
  //         this.currentToken = token;
  //         return token;
  //       })
  //     )
  //     .subscribe();
  // }

  // public getToken(): string {
  //   return this.currentToken;
  // }
}
