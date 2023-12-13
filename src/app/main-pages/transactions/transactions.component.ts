import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit, OnDestroy {
  date: Date = new Date();

  transactionsFromDB: any;
  transactionsFromDBSub!: Subscription;

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.loadTransactionsFromDB(this.date);
  }

  ngOnDestroy(): void {
    this.transactionsFromDBSub.unsubscribe();
  }

  increaseMonth(): void {
    const newDate = new Date(this.date);
    newDate.setMonth(this.date.getMonth() + 1);
    this.date = newDate;
  }

  decreaseMonth(): void {
    const newDate = new Date(this.date);
    newDate.setMonth(this.date.getMonth() - 1);
    this.date = newDate;
  }

  loadTransactionsFromDB(date: Date): void {
    this.transactionsFromDBSub = this.transactionService
      .getTransactionFromMonth(date)
      .subscribe((data) => {
        this.transactionsFromDB = data;
      });
  }
}
