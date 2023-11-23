import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { account, rechargeAccount } from 'src/app/models/accountModels';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { AccountService } from 'src/app/services/Account.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
})
export class RechargeComponent implements OnInit {
  transactionForm = this.fb.group({
    transactionType: 'RECHARGE',
    toAccountId: [0],
    amount: ['0'],
    notes: [''],
    date: [new Date()],
  });

  selectedDate = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) protected _data: account,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private accountService: AccountService,
    private rechargeDialogRef: MatDialogRef<RechargeComponent>
  ) {}

  ngOnInit() {
    console.log(this._data.accountId);

    this.transactionForm.controls.toAccountId.setValue(this._data.accountId);
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

  openDatepicker(event: Event) {
    event.preventDefault();
  }

  saveRecharge(event: Event) {
    event.preventDefault();
    const data = this.transactionForm.value as rechargeAccount;
    data.date = new Date(data.date);

    console.log(data);

    this.accountService.rechargeAccount(data).subscribe((updatedAccounts) => {
      this.rechargeDialogRef.close(updatedAccounts);
    });
  }
}
