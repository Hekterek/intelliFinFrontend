import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/User.service';

export const AuthGuard: CanActivateFn = () => {
  let loggedUser = null;

  inject(UserService)
    .getLoggedUser()
    .subscribe((value) => {
      loggedUser = value;
    });

  const router = inject(Router);

  if (loggedUser != null) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
