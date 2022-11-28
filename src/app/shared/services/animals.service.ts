import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animals } from '../models/animals.model';
import { TokenService } from './token.service';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  public usersList(userName: string): Observable<Animals> {
    const token = this.tokenService.returnToken();

    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${userName}/photos`, { headers });
  }
}
