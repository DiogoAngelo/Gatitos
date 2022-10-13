import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httClient: HttpClient) {}

  public post(newUser: NewUser): Observable<any> {
    return this.httClient.post('http://localhost:3000/user/signup', newUser);
  }
}
