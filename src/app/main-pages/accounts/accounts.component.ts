import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';
import { account } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [],
})
export class AccountsComponent implements OnInit, AfterViewInit {
  opacity = false;
  mainAccount: account[] = [];
  personalAccounts: account[] = [];

  constructor(
    private optionsDialog: MatDialog,
    private accountService: AccountService
  ) {
    // this.openAccountOptionsDialog();
  }

  ngOnInit(): void {
    this.accountService
      .getAllAccounts()
      .subscribe((data) => this.manageAccounts(data));
  }

  manageAccounts(data: account[]) {
    this.mainAccount = data.filter((account) => {
      return account.mainAccount === true;
    });
    this.personalAccounts = data.filter((account) => {
      return account.mainAccount === false;
    });
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

    this.optionsDialog.open(AccountOptionsComponent, dialogConfig);
  }
}
