import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { LoginData } from '../app-layout/models/login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { userId } from '../models/userModels';
import { checkAuth } from '../models/checkAuth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private checkIfLogged: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  getCheckIfLogged(): boolean {
    return this.checkIfLogged.valueOf();
  }

  setCheckIfLogged(value: boolean) {
    this.checkIfLogged = value;
  }

  login(loginData: LoginData): Observable<userId> {
    const body = new FormData();
    body.set('username', loginData.login);
    body.set('password', loginData.password);
    body.set('rememberMe', loginData.rememberMe.toString());
    return this.httpClient.post<userId>(
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
          this.router.navigate(['/']);
        },
      });
  }

  checkAuth(): void {
    this.httpClient
      .get<checkAuth>(`${restApiUrl}/api/user/checkAuth`, httpConfig)
      .subscribe((value) => {
        this.checkIfLogged = value.value;
      });
  }
}
