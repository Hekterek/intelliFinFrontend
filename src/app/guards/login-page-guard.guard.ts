import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { inject } from '@angular/core';
import { map, of, reduce, tap } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export const loginPageGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map((res: boolean) => {
      if (res == true) {
        router.navigate(['/app/categories']);
        return false;
      }
      return true;
    })
  );
};
