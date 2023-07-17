import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { LoginData } from '../app-layout/models/login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // loggedUser = new BehaviorSubject<User | null>(null);

  constructor(private httpClient: HttpClient) {}

  login(loginData: LoginData): Observable<void> {
    const body = new FormData();
    body.set('username', loginData.login);
    body.set('password', loginData.password);
    body.set('rememberMe', loginData.rememberMe.toString());
    return this.httpClient.post<void>(restApiUrl + '/login', body, httpConfig);
  }
}
