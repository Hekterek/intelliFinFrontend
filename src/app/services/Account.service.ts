import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { Observable } from 'rxjs';
import { account, addAccount, rechargeAccount } from '../models/accountModels';

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

  saveNewAccount(newAccount: addAccount): Observable<account> {
    return this.httpClient.post<account>(
      `${restApiUrl}/api/account`,
      newAccount,
      httpConfig
    );
  }

  updateAccount(editedAccount: account): Observable<account> {
    return this.httpClient.put<account>(
      `${restApiUrl}/api/account`,
      editedAccount,
      httpConfig
    );
  }

  removeAccount(accountId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${restApiUrl}/api/account/${accountId}`,
      httpConfig
    );
  }

  rechargeAccount(formData: rechargeAccount) {
    return this.httpClient.post<void>(
      `${restApiUrl}/api/transaction`,
      formData,
      httpConfig
    );
  }
}
