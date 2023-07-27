import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-setAccountIconDialog',
  templateUrl: './setAccountIconDialog.component.html',
  styleUrls: ['./setAccountIconDialog.component.scss'],
})
export class SetAccountIconDialogComponent implements OnInit {
  title: string = 'ddd';
  icons: string[] = [
    './assets/icons/accountIcons/accounting.png',
    './assets/icons/accountIcons/accounts.png',
    './assets/icons/accountIcons/bank1.png',
    './assets/icons/accountIcons/bank.png',
    './assets/icons/accountIcons/balance.png',
    './assets/icons/accountIcons/accounting.png',
    './assets/icons/accountIcons/accounts.png',
    './assets/icons/accountIcons/bank1.png',
    './assets/icons/accountIcons/bank.png',
    './assets/icons/accountIcons/balance.png',
  ];

  constructor(
    private dialogRef: MatDialogRef<SetAccountIconDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.title = data.title;
  }

  ngOnInit() {}

  saveIcon(icon: any) {
    this.dialogRef.close(icon);
  }
}
