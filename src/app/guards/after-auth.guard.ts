import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/User.service';

export const AfterAuthGuard: CanActivateFn = () => {
  let loggedUser = null;

  inject(UserService)
    .getLoggedUser()
    .subscribe((value) => {
      loggedUser = value;
    });

  const router = inject(Router);

  if (loggedUser != null) {
    console.log('--------------------------------');
    console.log(loggedUser);
    console.log('--------------------------------');

    router.navigate(['categories']);
    return false;
  } else {
    return true;
  }
};
