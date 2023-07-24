import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { addAccount } from 'src/app/models/accountModels';
import { EditNameComponent } from '../../../../globalDialogs/editFieldString/editName.component';

@Component({
  selector: 'app-addAccount',
  templateUrl: './addAccount.component.html',
  styleUrls: ['./addAccount.component.scss'],
  standalone: true,
})
export class AddAccountComponent implements OnInit {
  newAccountData: addAccount = {
    name: '___________',
    description: '___________',
    icon: 'icon',
    color: 'color',
    includeTotal: true,
  };

  constructor(private nameDialog: MatDialog) {
    this.openFieldStringDialog();
  }

  ngOnInit() {}

  openFieldStringDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Name',
    };

    this.nameDialog.open(EditNameComponent, dialogConfig);
  }
}
