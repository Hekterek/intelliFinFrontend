import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { account, transferAccount } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { AccountPickerComponent } from '../accountPicker/accountPicker.component';
import { NotEnoughMoneyDialogComponent } from '../notEnoughMoneyDialog/notEnoughMoneyDialog.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
})
export class TransferComponent implements OnInit {
  transactionForm = this.fb.group({
    transactionType: 'TRANSFER',
    fromAccountId: [0],
    toAccountId: [0],
    amount: ['0'],
    notes: [''],
    date: [new Date()],
  });
  selectedDate = new FormControl();

  fromAccount!: account;
  toAccount!: account | null;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected _data: account,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private accountService: AccountService,
    private transferDialogRef: MatDialogRef<TransferComponent>
  ) {}

  ngOnInit() {
    this.fromAccount = this._data;

    // this.openToAccountPicker();
  }

  addNumber(num: string, event: Event) {
    event.preventDefault();
    if (this.transactionForm.controls.amount.value == '0') {
      this.transactionForm.controls.amount.setValue(num);
    } else {
      this.transactionForm.controls.amount.setValue(
        this.transactionForm.controls.amount.value + num
      );
    }
  }

  removeLastNumber(event: Event) {
    event.preventDefault();
    const amount = this.transactionForm.controls['amount'].value;

    if (amount !== null && amount !== '0') {
      let amountArr = amount.split('');
      if (amountArr[amountArr.length - 1] === '.') {
        amountArr.pop();
        amountArr.pop();
      } else if (amountArr.length == 1) {
        amountArr = ['0'];
      } else {
        amountArr.pop();
      }
      this.transactionForm.controls.amount.setValue(amountArr.join(''));
    }
  }

  openEditDescDialog() {
    const descRef = this.dialog.open(EditDescriptionComponent, {
      width: '80%',
      data: {
        title: 'Description',
        desc: this.transactionForm.controls.notes.value,
      },
      position: {
        top: '100px',
      },
    });

    descRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this.transactionForm.controls.notes.setValue(data.desc);
      }
    });
  }

  openFromAccountPicker() {
    let transferDialogRef: MatDialogRef<AccountPickerComponent>;
    let accounts: account[] = [];
    this.accountService
      .getAllAccounts()
      .subscribe((accountsFromDB: account[]) => {
        accounts = accountsFromDB.filter(
          (account: account) => account.accountId !== this.toAccount?.accountId
        );
        transferDialogRef = this.dialog.open(AccountPickerComponent, {
          data: accounts,
        });

        transferDialogRef.afterClosed().subscribe((account: account) => {
          if (account !== undefined) {
            this.fromAccount = account;
          }
        });
      });
  }

  openToAccountPicker() {
    let transferDialogRef: MatDialogRef<AccountPickerComponent>;
    let accounts: account[] = [];
    this.accountService
      .getAllAccounts()
      .subscribe((accountsFromDB: account[]) => {
        accounts = accountsFromDB.filter(
          (account: account) => account.accountId !== this.fromAccount.accountId
        );
        transferDialogRef = this.dialog.open(AccountPickerComponent, {
          data: accounts,
        });

        transferDialogRef.afterClosed().subscribe((account: account) => {
          this.toAccount = account;
        });
      });
  }

  openDatepicker(event: Event) {
    event.preventDefault();
  }

  saveTransfer(event: Event) {
    event.preventDefault();
    const data = this.transactionForm.value as transferAccount;
    if (this.fromAccount.amount < parseFloat(data.amount)) {
      this.openNotEnoughMoneyDialog();
      return;
    }

    data.date = new Date(data.date);
    data.fromAccountId = this.fromAccount.accountId;
    data.toAccountId = this.toAccount?.accountId;

    if (data.toAccountId != 0 && data.toAccountId != undefined) {
      this.accountService
        .transferFromToAccount(data)
        .subscribe((accounts: account[]) => {
          this.transferDialogRef.close(accounts);
        });
    }
  }

  openNotEnoughMoneyDialog(): void {
    const showInfo = this.dialog.open(NotEnoughMoneyDialogComponent, {
      width: 'min(100%, 300px)',
      panelClass: 'dialogOverflowHidden',
    });
    setTimeout(() => {
      showInfo.close();
    }, 3000);
  }
}
