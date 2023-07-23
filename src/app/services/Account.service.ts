import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { Observable } from 'rxjs';
import { account } from '../models/accountModels';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<account[]> {
    return this.httpClient.get<account[]>(
      `${restApiUrl}/api/account`,
      httpConfig
    );
  }
}
