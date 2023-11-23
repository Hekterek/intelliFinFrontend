import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';
import { account } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';
import { AddAccountComponent } from './dialogs/addAccount/addAccount.component';
import { ActivatedRoute } from '@angular/router';
import { EditAccountComponent } from './dialogs/editAccount/editAccount.component';
import { RechargeComponent } from './dialogs/recharge/recharge.component';
import { TransferComponent } from './dialogs/transfer/transfer.component';

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
    // this.openRechargeDialog(this.mainAccount[0]);
    // this.openTransferDialog(this.mainAccount[0]);
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

  openAccountOptionsDialog(account: account) {
    const dialogRef = this.dialog.open(AccountOptionsComponent, {
      position: { bottom: '0' },
      width: '100%',
      maxWidth: '100vw',
      data: account,
    });

    dialogRef.afterClosed().subscribe((option) => {
      switch (option) {
        case 'edit':
          this.openEditAccountDialog(account);
          break;
        case 'recharge':
          this.openRechargeDialog(account);
          break;
        case 'transfer':
          this.openTransferDialog(account);
          break;
      }
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

  openEditAccountDialog(account: account) {
    const dialogRef = this.dialog.open(EditAccountComponent, {
      position: {
        bottom: '0',
        left: '0',
      },
      width: '100%',
      maxWidth: '100vw',
      data: account,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);

      if (data !== undefined && data !== true) {
        this.accountService.updateAccount(data).subscribe((editedAccount) => {
          if (this.mainAccount[0].accountId === editedAccount.accountId) {
            this.mainAccount[0] = editedAccount;
          } else {
            const index = this.personalAccounts.findIndex(
              (acc) => editedAccount.accountId === acc.accountId
            );
            this.personalAccounts[index] = editedAccount;
          }
        });
      } else if (data === true) {
        this.accountService.removeAccount(account.accountId).subscribe(() => {
          this.personalAccounts = this.personalAccounts.filter(
            (el) => el.accountId !== account.accountId
          );
        });
      }
    });
  }

  openRechargeDialog(account: account) {
    const dialogRef = this.dialog.open(RechargeComponent, {
      position: {
        bottom: '0',
        // left: '0',
      },
      width: '100%',
      maxWidth: '100vw',
      data: account,
    });

    dialogRef.afterClosed().subscribe((updatedAccounts: account[]) => {
      this.updateAccountsAfterTransaction(updatedAccounts);
    });
  }

  openTransferDialog(account: account) {
    const dialogRef = this.dialog.open(TransferComponent, {
      position: {
        bottom: '0',
        // left: '0',
      },
      width: '100%',
      maxWidth: '100vw',
      data: account,
    });
  }

  private updateAccountsAfterTransaction(updatedAccounts: account[]) {
    updatedAccounts.forEach((updatedAccount) => {
      this.mainAccount.filter((account) => {
        if (account.accountId === updatedAccount.accountId) {
          account.amount = updatedAccount.amount;
        }
      });
      this.personalAccounts.filter((account) => {
        if (account.accountId === updatedAccount.accountId) {
          account.amount = updatedAccount.amount;
        }
      });
    });
  }
}
