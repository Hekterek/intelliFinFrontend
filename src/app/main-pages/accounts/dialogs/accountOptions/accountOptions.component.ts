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

    // this.goToEditAccount();
  }

  ngOnInit() {}

  openEditAccountDialog() {
    this.dialogRef.close('edit');
  }

  openRechargeDialog() {
    this.dialogRef.close('recharge');
  }

  openTransferDialog() {
    this.dialogRef.close('transfer');
  }
}
