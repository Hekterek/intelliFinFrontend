import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { addAccount } from 'src/app/models/accountModels';
import { EditNameComponent } from '../editName/editName.component';
import { FormBuilder } from '@angular/forms';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import { SetAccountIconDialogComponent } from 'src/app/globalDialogs/setAccountIconDialog/setAccountIconDialog.component';

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
    color: [''],
    includeTotal: [true],
  });

  constructor(private nameDialog: MatDialog, private fb: FormBuilder) {
    // this.openSetIconDialog();
  }

  ngOnInit() {}

  openSetNameDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Name',
    };

    const dialogRef = this.nameDialog.open(EditNameComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
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
      if (data !== undefined) {
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
}
