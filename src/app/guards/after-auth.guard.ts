import { CanActivateFn } from '@angular/router';

export const AfterAuthGuard: CanActivateFn = () => {
  return true;
};
