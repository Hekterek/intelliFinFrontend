import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { transactionFromDB } from 'src/app/models/transaction';
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

  categorizedTransactions: { [key: string]: transactionFromDB[] } = {};

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
    this.loadTransactionsFromDB(this.date);
  }

  decreaseMonth(): void {
    const newDate = new Date(this.date);
    newDate.setMonth(this.date.getMonth() - 1);
    this.date = newDate;
    this.loadTransactionsFromDB(this.date);
  }

  loadTransactionsFromDB(date: Date): void {
    this.transactionsFromDBSub = this.transactionService
      .getTransactionFromMonth(date)
      .subscribe((data: transactionFromDB[]) => {
        this.prepareTransactionsForDisplay(data);
      });
  }

  private prepareTransactionsForDisplay(data: transactionFromDB[]) {
    this.categorizedTransactions = {};
    data.forEach((transaction: transactionFromDB) => {
      let transactionDate: Date = new Date(transaction.date);
      transactionDate.setHours(1, 0, 0, 0);
      const stringDate = transactionDate.toISOString();

      if (!this.categorizedTransactions[stringDate]) {
        this.categorizedTransactions[stringDate] = [];
      }

      this.categorizedTransactions[stringDate].push(transaction);
    });
    console.log(this.categorizedTransactions);
  }

  getCategorizedTransactionsKeys(): string[] {
    return Object.keys(this.categorizedTransactions);
  }

  getDayOfWeekFromIsoString(transaction: transactionFromDB): number {
    const date = new Date(transaction.date);
    return date.getDate();
  }
}
