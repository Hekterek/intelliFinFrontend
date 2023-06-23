import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main-pages/categories/categories.component';
import { AccountsComponent } from './main-pages/accounts/accounts.component';
import { TransactionsComponent } from './main-pages/transactions/transactions.component';
import { MyGoalsComponent } from './main-pages/my-goals/my-goals.component';
import { LoginPageComponent } from './start-page/login-page/login-page.component';
import { MainMenuComponent } from './shared-pages/main-menu/main-menu.component';

const routes: Routes = [
  // { path: 'categories', component: CategoriesComponent, outlet: 'app' },
  // { path: 'accounts', component: AccountsComponent, outlet: 'app' },
  // { path: 'transactions', component: TransactionsComponent, outlet: 'app' },
  // { path: 'mygoals', component: MyGoalsComponent, outlet: 'app' },
  { path: '', component: LoginPageComponent },
  {
    path: 'app',
    component: MainMenuComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'accounts', component: AccountsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'mygoals', component: MyGoalsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
