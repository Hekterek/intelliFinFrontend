import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditAccountComponent } from '../editAccount/editAccount.component';
import { account } from 'src/app/models/accountModels';

@Component({
  selector: 'app-accountOptions',
  templateUrl: './accountOptions.component.html',
  styleUrls: ['./accountOptions.component.scss'],
})
export class AccountOptionsComponent implements OnInit {
  currentAccountData!: account;

  constructor(
    private dialogRef: MatDialogRef<AccountOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) data: account,
    private editDialog: MatDialog
  ) {
    this.currentAccountData = data;

    this.goToEditAccount();
  }

  ngOnInit() {}

  goToEditAccount() {
    const dialogRef = this.editDialog.open(EditAccountComponent, {
      position: {
        bottom: '0',
        left: '0',
      },
      width: '100%',
      maxWidth: '100vw',
      data: this.currentAccountData,
    });

    dialogRef.afterClosed().subscribe((data) => {
      // console.log(data);

      if (data !== undefined) {
        this.dialogRef.close(data);
      } else {
        this.dialogRef.close();
      }
    });
  }
}
