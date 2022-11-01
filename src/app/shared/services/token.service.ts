import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public returnToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  public saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  public deleteToken() {
    localStorage.removeItem(KEY);
  }

  public hasToken() {
    return !!this.returnToken();
  }
}
