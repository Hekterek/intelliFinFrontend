import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/User.service';

export const AuthGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getCheckIfLogged() === false) {
    router.navigate(['/']);
  }

  return userService.getCheckIfLogged();
};
