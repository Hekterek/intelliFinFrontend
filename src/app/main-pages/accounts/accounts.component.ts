import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';
import { account } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';
import { AddAccountComponent } from './dialogs/addAccount/addAccount.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit, AfterViewInit {
  opacity: boolean = false;
  mainAccount: account[] = [];
  personalAccounts: account[] = [];

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.actRoute.data.subscribe((data) => {
      data['accountsResolver'].filter((account: account) => {
        account.mainAccount === true
          ? this.mainAccount.push(account)
          : this.personalAccounts.push(account);
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.opacity = true;
    }, 0);
  }

  openAccountOptionsDialog() {
    this.dialog.open(AccountOptionsComponent, {
      position: { bottom: '0' },
      width: '100%',
      maxWidth: '100vw',
    });
  }

  openAddAccountDialog() {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      position: { bottom: '0' },
      width: '100%',
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this.accountService
          .saveNewAccount(data)
          .subscribe((response: account) => {
            this.personalAccounts.push(response);
          });
      }
    });
  }
}
