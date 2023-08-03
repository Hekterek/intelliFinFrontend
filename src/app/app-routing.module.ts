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
import { AfterAuthGuard } from './guards/after-auth.guard';
import { accountResolver } from './services/resolvers/accounts-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    canActivate: [AfterAuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AfterAuthGuard],
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full',
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        resolve: { accountsResolver: accountResolver },
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
      {
        path: 'mygoals',
        component: MyGoalsComponent,
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
