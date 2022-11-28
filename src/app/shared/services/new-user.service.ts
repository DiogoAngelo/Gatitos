import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httClient: HttpClient) {}

  public register(newUser: NewUser): Observable<any> {
    return this.httClient.post(`${API}/user/signup`, newUser);
  }

  public newUserValidate(userName: string) {
    return this.httClient.get(`${API}/user/exists/${userName}`);
  }
}
