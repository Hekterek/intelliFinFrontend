import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { account } from 'src/app/models/accountModels';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { monthsEN } from 'src/app/data/months';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
})
export class RechargeComponent implements OnInit {
  transactionForm = this.fb.group({
    id: [0],
    accountName: [''],
    amount: ['0'],
    notes: [''],
    date: [''],
  });

  currentDate: Date = new Date();

  dateShow: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected _data: account,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.transactionForm.controls.id.setValue(_data.id);
    this.transactionForm.controls.accountName.setValue(_data.name);
  }

  ngOnInit() {
    this.dateShow = `${this.currentDate.getDate()} ${
      monthsEN[this.currentDate.getMonth()]
    } ${this.currentDate.getFullYear()}`;
  }

  addNumber(num: string, event: Event) {
    event.preventDefault();
    this.transactionForm.controls.amount.setValue(
      this.transactionForm.controls.amount.value + num
    );
  }

  removeLastNumber(event: Event) {
    event.preventDefault();
    const amount = this.transactionForm.controls['amount'].value;

    if (amount !== null && amount !== '0') {
      const amountArr = amount.split('');
      if (amountArr[amountArr.length - 1] === '.') {
        amountArr.pop();
        amountArr.pop();
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
}
