import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

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
