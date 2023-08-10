import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { account } from 'src/app/models/accountModels';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
})
export class RechargeComponent implements OnInit {
  transactionForm = this.fb.group({
    id: [0],
    accountName: [''],
    amount: ['0'],
    notes: [''],
    date: [''],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: account,
    private fb: FormBuilder
  ) {
    this.transactionForm.controls.id.setValue(data.id);
    this.transactionForm.controls.accountName.setValue(data.name);
    console.log(data);
  }

  ngOnInit() {}

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
      amountArr.pop();
      this.transactionForm.controls.amount.setValue(amountArr.join(''));
    }
  }
}
