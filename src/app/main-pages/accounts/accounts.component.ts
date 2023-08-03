import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';
import { account } from 'src/app/models/accountModels';
import { AccountService } from 'src/app/services/Account.service';
import { AddAccountComponent } from './dialogs/addAccount/addAccount.component';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ActivatedRoute } from '@angular/router';

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
    private accountService: AccountService,
    private spinner: SpinnerService,
    private actRoute: ActivatedRoute
  ) {
    // this.openAccountOptionsDialog();
    // this.openAddAccountDialog();
    // spinner.runSpinner();
  }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.actRoute.data.subscribe((data) => {
      console.log(data['accountsResolver']);

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
  }
}
