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
import { SetAccountIconDialogComponent } from './accounts/dialogs/setAccountIconDialog/setAccountIconDialog.component';
import { SetAccountColorComponent } from './accounts/dialogs/setAccountColor/setAccountColor.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RechargeComponent } from './accounts/dialogs/recharge/recharge.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TransferComponent } from './accounts/dialogs/transfer/transfer.component';
import { AccountPickerComponent } from './accounts/dialogs/accountPicker/accountPicker.component';

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
    SetAccountColorComponent,
    RechargeComponent,
    TransferComponent,
    AccountPickerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
})
export class MainPagesModule {}
