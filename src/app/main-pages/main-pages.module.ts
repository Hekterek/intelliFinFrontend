import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MyGoalsComponent } from './my-goals/my-goals.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    AccountsComponent,
    CategoriesComponent,
    TransactionsComponent,
    MyGoalsComponent,
  ],
  imports: [CommonModule],
})
export class MainPagesModule {}
