import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/User.service';

// export const AfterAuthGuard: CanActivateFn = () => {
// let loggedUser = null;
// const router = inject(Router);
// inject(UserService)
//   .getLoggedUser()
//   .subscribe((value) => {
//     // console.log(value);
//     loggedUser = value;
//   });
// console.log(loggedUser);
// if (loggedUser != null) {
//   router.navigate(['/categories']);
//   return false;
// } else {
//   return true;
// }
// };
