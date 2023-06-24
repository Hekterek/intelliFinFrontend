import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main-pages/categories/categories.component';
import { AccountsComponent } from './main-pages/accounts/accounts.component';
import { TransactionsComponent } from './main-pages/transactions/transactions.component';
import { MyGoalsComponent } from './main-pages/my-goals/my-goals.component';
import { LoginPageComponent } from './start-page/login-page/login-page.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'accounts', component: AccountsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'mygoals', component: MyGoalsComponent },
    ],
  },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
