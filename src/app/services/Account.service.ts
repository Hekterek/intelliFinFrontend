import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { Observable } from 'rxjs';
import {
  account,
  addAccount,
  rechargeAccount,
  transferAccount,
} from '../models/accountModels';

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
    console.log(editedAccount);

    return this.httpClient.put<account>(
      `${restApiUrl}/api/account/${editedAccount.accountId}`,
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
    console.log(formData);

    return this.httpClient.post<account[]>(
      `${restApiUrl}/api/transaction/recharge`,
      formData,
      httpConfig
    );
  }

  transferFromToAccount(formData: transferAccount) {
    console.log(formData);

    return this.httpClient.post<account[]>(
      `${restApiUrl}/api/transaction/transfer`,
      formData,
      httpConfig
    );
  }
}
