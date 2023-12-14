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
  }

  decreaseMonth(): void {
    const newDate = new Date(this.date);
    newDate.setMonth(this.date.getMonth() - 1);
    this.date = newDate;
  }

  loadTransactionsFromDB(date: Date): void {
    this.transactionsFromDBSub = this.transactionService
      .getTransactionFromMonth(date)
      .subscribe((data: transactionFromDB[]) => {
        this.prepareTransactionsForDisplay(data);
      });
  }

  private prepareTransactionsForDisplay(data: transactionFromDB[]) {
    data.forEach((transaction) => {
      const transactionDate = new Date(transaction.date).toISOString();

      if (!this.categorizedTransactions[transactionDate]) {
        this.categorizedTransactions[transactionDate] = [];
      }

      this.categorizedTransactions[transactionDate].push(transaction);
    });
  }

  getCategorizedTransactionsKeys(): string[] {
    return Object.keys(this.categorizedTransactions);
  }

  getDayOfWeekFromIsoString(transaction: transactionFromDB): number {
    const date = new Date(transaction.date);
    return date.getDate();
  }
}
