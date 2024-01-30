import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpConfig, restApiUrl } from './common';
import { Observable, retry } from 'rxjs';
import { categoryDTO } from '../models/categoryModels';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<categoryDTO[]> {
    return this.http
      .get<categoryDTO[]>(restApiUrl + '/category', httpConfig)
      .pipe(retry(3));
  }
}
