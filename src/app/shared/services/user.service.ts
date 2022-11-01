import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import jwtDecode from 'jwt-decode';
import { User } from '../models/new-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  public returnUser() {
    return this.userSubject.asObservable();
  }

  public saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  public logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  public isLoggedIn() {
    return this.tokenService.hasToken();
  }
}
