import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { restApiUrl } from './common';
import { Observable } from 'rxjs';
import { transactionFromDB } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getTransactionFromMonth(date: Date): Observable<transactionFromDB[]> {
    const params = new HttpParams().set('date', date.toISOString());
    return this.http.get<transactionFromDB[]>(`${restApiUrl}/api/transaction`, {
      params: params,
      withCredentials: true,
    });
  }
}
