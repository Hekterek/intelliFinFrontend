import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MyGoalsComponent } from './my-goals/my-goals.component';
import { AccountOptionsComponent } from './accounts/dialogs/accountOptions/accountOptions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAccountComponent } from './accounts/dialogs/addAccount/addAccount.component';
import { EditAccountComponent } from './accounts/dialogs/editAccount/editAccount.component';
import { EditNameComponent } from './accounts/dialogs/editName/editName.component';
import { EditDescriptionComponent } from './accounts/dialogs/editDescription/editDescription.component';
import { SetAccountIconDialogComponent } from '../globalDialogs/setAccountIconDialog/setAccountIconDialog.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    AccountsComponent,
    CategoriesComponent,
    TransactionsComponent,
    MyGoalsComponent,
    AccountOptionsComponent,
    AddAccountComponent,
    EditAccountComponent,
    EditNameComponent,
    EditDescriptionComponent,
    SetAccountIconDialogComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class MainPagesModule {}
