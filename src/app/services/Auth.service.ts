import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { LoginData } from '../app-layout/models/login';
import {
  Observable,
  catchError,
  map,
  of,
  BehaviorSubject,
  throwError,
  EMPTY,
} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(loginData: LoginData): Observable<void> {
    const body = new FormData();
    body.set('username', loginData.login);
    body.set('password', loginData.password);
    body.set('rememberMe', loginData.rememberMe.toString());

    return this.httpClient.post<void>(restApiUrl + '/login', body, httpConfig);
  }

  logout() {
    this.httpClient
      .post<void>(`${restApiUrl}/logout`, null, httpConfig)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      });
  }

  isLoggedIn(): Observable<boolean> {
    return this.httpClient
      .get<any>(`${restApiUrl}/api/user/checkAuth`, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          return response.status === 200;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }
}
