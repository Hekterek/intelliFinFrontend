import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { restApiUrl } from './common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getTransactionFromMonth(date: Date): Observable<any> {
    const params = new HttpParams().set('date', date.toISOString());
    return this.http.get<any>(`${restApiUrl}/api/transaction`, {
      params: params,
    });
  }
}
