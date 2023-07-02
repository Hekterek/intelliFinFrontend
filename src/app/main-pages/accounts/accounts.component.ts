import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountOptionsComponent } from 'src/app/main-pages/accounts/dialogs/accountOptions/accountOptions.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [],
})
export class AccountsComponent implements AfterViewInit {
  test = false;

  constructor(private optionsDialog: MatDialog) {
    // this.openAccountOptionsDialog();
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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.test = true;
    }, 0);
  }
}
