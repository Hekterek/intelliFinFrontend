import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditNameComponent } from '../editName/editName.component';
import { FormBuilder } from '@angular/forms';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import { SetAccountIconDialogComponent } from 'src/app/main-pages/accounts/dialogs/setAccountIconDialog/setAccountIconDialog.component';
import { SetAccountColorComponent } from '../setAccountColor/setAccountColor.component';
import { addAccount } from 'src/app/models/accountModels';
@Component({
  selector: 'app-addAccount',
  templateUrl: './addAccount.component.html',
  styleUrls: ['./addAccount.component.scss'],
})
export class AddAccountComponent implements OnInit {
  newAccountData = this.fb.group({
    name: [''],
    description: [''],
    icon: ['./assets/icons/accountIcons/accounting.png'],
    color: ['rgb(248, 185, 69)'],
    includeTotal: [true],
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAccountComponent>
  ) {
    // this.openSetIconDialog();
    // this.openSetColorDialog();
  }

  ngOnInit() {}

  saveAccount() {
    const dataOfNewAccount = this.newAccountData.value as addAccount;
    this.dialogRef.close(dataOfNewAccount);
  }

  openSetNameDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Name',
    };

    const dialogRef = this.dialog.open(EditNameComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newAccountData.controls.name.setValue(data.accountName);
      }
    });
  }

  openSetDescDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Description',
    };

    const dialogRef = this.dialog.open(EditDescriptionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newAccountData.controls.description.setValue(data.accountDesc);
      }
    });
  }

  openSetIconDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Choose icon',
    };

    const dialogRef = this.dialog.open(
      SetAccountIconDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newAccountData.controls.icon.setValue(data);
      }
    });
  }

  openSetColorDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Choose color',
    };

    const dialogRef = this.dialog.open(SetAccountColorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newAccountData.controls.color.setValue(data);
      }
    });
  }
}
