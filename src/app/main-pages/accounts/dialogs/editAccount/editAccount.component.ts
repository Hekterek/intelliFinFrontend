import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { account } from 'src/app/models/accountModels';
import { EditNameComponent } from '../editName/editName.component';
import { EditDescriptionComponent } from '../editDescription/editDescription.component';
import { SetAccountIconDialogComponent } from '../setAccountIconDialog/setAccountIconDialog.component';
import { SetAccountColorComponent } from '../setAccountColor/setAccountColor.component';

@Component({
  selector: 'app-editAccount',
  templateUrl: './editAccount.component.html',
  styleUrls: ['./editAccount.component.scss'],
})
export class EditAccountComponent implements OnInit {
  editedAccount = this.fb.group({
    id: [0],
    name: [''],
    description: [''],
    icon: [''],
    color: [''],
    amount: [0],
    includeTotal: [false],
    mainAccount: [false],
    userId: [0],
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: account
  ) {
    console.log(data);
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editedAccount.controls.id.setValue(this.data.id);
    this.editedAccount.controls.name.setValue(this.data.name);
    this.editedAccount.controls.description.setValue(this.data.description);
    this.editedAccount.controls.icon.setValue(this.data.icon);
    this.editedAccount.controls.color.setValue(this.data.color);
    this.editedAccount.controls.amount.setValue(this.data.amount);
    this.editedAccount.controls.includeTotal.setValue(this.data.includeTotal);
    this.editedAccount.controls['mainAccount'].setValue(this.data.mainAccount);
    this.editedAccount.controls['userId'].setValue(this.data.userId);
  }

  openEditNameDialog() {
    const dialogRef = this.dialog.open(EditNameComponent, {
      width: '100%',
      maxWidth: '100vw',
      data: {
        title: 'Name',
        value: this.editedAccount.controls.name.get('name'),
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.editedAccount.controls.name.setValue(data.accountName);
      }
    });
  }

  openEditDescDialog() {
    const dialogRef = this.dialog.open(EditDescriptionComponent, {
      width: '100%',
      maxWidth: '100vw',
      data: {
        title: 'Description',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        console.log(data);

        this.editedAccount.controls.description.setValue(data.accountDesc);
      }
    });
  }

  openEditIconDialog() {
    const dialogRef = this.dialog.open(SetAccountIconDialogComponent, {
      width: '100%',
      maxWidth: '100vw',
      data: {
        title: 'Choose icon',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.editedAccount.controls.icon.setValue(data);
      }
    });
  }

  openEditColorDialog() {
    const dialogRef = this.dialog.open(SetAccountColorComponent, {
      width: '100%',
      maxWidth: '100vw',
      data: {
        title: 'Choose color',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.editedAccount.controls.color.setValue(data);
      }
    });
  }
}
