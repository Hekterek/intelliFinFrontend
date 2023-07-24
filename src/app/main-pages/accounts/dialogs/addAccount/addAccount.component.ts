import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { addAccount } from 'src/app/models/accountModels';
import { EditNameComponent } from '../editName/editName.component';

@Component({
  selector: 'app-addAccount',
  templateUrl: './addAccount.component.html',
  styleUrls: ['./addAccount.component.scss'],
  standalone: true,
})
export class AddAccountComponent implements OnInit {
  newAccountData: addAccount[] = [];

  constructor(private nameDialog: MatDialog) {}

  ngOnInit() {}

  openNameDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      bottom: '0',
    };
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    this.nameDialog.open(EditNameComponent, dialogConfig);
  }
}
