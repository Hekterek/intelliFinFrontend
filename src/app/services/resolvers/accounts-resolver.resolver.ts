import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { account } from 'src/app/models/accountModels';
import { AccountService } from '../Account.service';
import { inject } from '@angular/core';

export const accountResolver: ResolveFn<account[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  accountService: AccountService = inject(AccountService)
): Observable<account[]> => {
  return accountService.getAllAccounts();
};
