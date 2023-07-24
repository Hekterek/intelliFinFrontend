import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditAccountComponent } from '../editAccount/editAccount.component';

@Component({
  selector: 'app-accountOptions',
  standalone: true,
  templateUrl: './accountOptions.component.html',
  styleUrls: ['./accountOptions.component.scss'],
})
export class AccountOptionsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AccountOptionsComponent>,
    private editDialog: MatDialog
  ) {
    // this.goToEditAccount();
  }

  ngOnInit() {}

  goToEditAccount() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0',
      left: '0',
    };
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    this.editDialog.open(EditAccountComponent, dialogConfig);

    this.dialogRef.close();
  }
}
