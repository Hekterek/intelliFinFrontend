import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { Observable } from 'rxjs';
import { account, addAccount } from '../models/accountModels';
import { mainAccount, personalAccounts } from 'src/app/data/accountsData';

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

  saveNewAccount(newAccount: addAccount): Observable<void> {
    return this.httpClient.post<void>(
      `${restApiUrl}/api/account/save`,
      newAccount,
      httpConfig
    );
  }
}
