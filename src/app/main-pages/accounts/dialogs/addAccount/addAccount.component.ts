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
import { AccountService } from 'src/app/services/Account.service';
import { addAccount } from 'src/app/models/accountModels';
import { Router } from '@angular/router';
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
    private nameDialog: MatDialog,
    private fb: FormBuilder,
    private accountService: AccountService,
    private dialogRef: MatDialogRef<AddAccountComponent>,
    private router: Router
  ) {
    // this.openSetIconDialog();
    // this.openSetColorDialog();
  }

  ngOnInit() {}

  saveAccount() {
    const dataOfNewAccount = this.newAccountData.value as addAccount;
    this.accountService.saveNewAccount(dataOfNewAccount).subscribe(() => {
      this.dialogRef.close();
    });
  }

  openSetNameDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Name',
    };

    const dialogRef = this.nameDialog.open(EditNameComponent, dialogConfig);

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

    const dialogRef = this.nameDialog.open(
      EditDescriptionComponent,
      dialogConfig
    );

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

    const dialogRef = this.nameDialog.open(
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

    const dialogRef = this.nameDialog.open(
      SetAccountColorComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newAccountData.controls.color.setValue(data);
      }
    });
  }
}
