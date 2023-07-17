import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { LoginData } from '../app-layout/models/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedUser = new BehaviorSubject<Number | null>(null);

  constructor(private httpClient: HttpClient, private router: Router) {}

  setLoggedUser(user: Number | null) {
    this.loggedUser.next(user);
  }

  getLoggedUser(): Observable<Number | null> {
    return this.loggedUser.asObservable();
  }

  login(loginData: LoginData): Observable<Number> {
    const body = new FormData();
    body.set('username', loginData.login);
    body.set('password', loginData.password);
    body.set('rememberMe', loginData.rememberMe.toString());
    return this.httpClient.post<Number>(
      restApiUrl + '/login',
      body,
      httpConfig
    );
  }

  logout() {
    this.httpClient
      .post<void>(`${restApiUrl}/logout`, null, httpConfig)
      .subscribe({
        next: () => {
          this.setLoggedUser(null);
          this.router.navigate(['/']);
        },
      });
  }
}
