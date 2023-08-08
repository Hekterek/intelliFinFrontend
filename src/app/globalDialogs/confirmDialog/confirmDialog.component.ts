import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmDialog',
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  data!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    this.data = data;
  }

  ngOnInit() {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
