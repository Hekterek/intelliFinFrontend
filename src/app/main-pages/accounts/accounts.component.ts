import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';
import { account } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';
import { AddAccountComponent } from './dialogs/addAccount/addAccount.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [],
})
export class AccountsComponent implements OnInit, AfterViewInit {
  opacity: boolean = false;
  mainAccount: account[] = [];
  personalAccounts: account[] = [];
  spinnerRef: any;

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService
  ) {
    // this.openAccountOptionsDialog();
    // this.openAddAccountDialog();
    this.runSpinner();
    // this.stopSpinner();
  }

  runSpinner() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.position = {
    //   bottom: '0',
    // };
    // dialogConfig.width = '100%';
    // dialogConfig.maxWidth = '100vw';
    dialogConfig.hasBackdrop = false;
    this.spinnerRef = this.dialog.open(SpinnerComponent, dialogConfig);
  }

  stopSpinner() {
    this.spinnerRef.close();
  }

  ngOnInit(): void {
    this.getAllAccounts();
    // this.mainAccount = mainAccount;
    // this.personalAccounts = personalAccounts;
  }

  getAllAccounts() {
    // this.runSpinner();
    this.accountService.getAllAccounts().subscribe((data) => {
      this.manageAccounts(data);
    });
  }

  manageAccounts(data: account[]) {
    data.filter((account) => {
      account.mainAccount === true
        ? this.mainAccount.push(account)
        : this.personalAccounts.push(account);
    });
    // this.stopSpinner();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.opacity = true;
    }, 0);
  }

  openAccountOptionsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      bottom: '0',
    };
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    this.dialog.open(AccountOptionsComponent, dialogConfig);
  }

  openAddAccountDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      bottom: '0',
    };
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    const dialogRef = this.dialog.open(AddAccountComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(() => {
    //   mainAccount = [];
    //   personalAccounts = [];
    //   this.getAllAccounts();
    // });
  }
}
