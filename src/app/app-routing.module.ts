import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main-pages/categories/categories.component';
import { AccountsComponent } from './main-pages/accounts/accounts.component';
import { TransactionsComponent } from './main-pages/transactions/transactions.component';
import { MyGoalsComponent } from './main-pages/my-goals/my-goals.component';
import { LoginPageComponent } from './start-page/login-page/login-page.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { WelcomePageComponent } from './start-page/welcomePage/welcomePage.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full',
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'mygoals',
        component: MyGoalsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
