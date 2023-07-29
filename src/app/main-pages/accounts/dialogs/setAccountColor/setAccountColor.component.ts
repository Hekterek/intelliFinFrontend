import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SetAccountIconDialogComponent } from '../setAccountIconDialog/setAccountIconDialog.component';

@Component({
  selector: 'app-setAccountColor',
  templateUrl: './setAccountColor.component.html',
  styleUrls: ['./setAccountColor.component.scss'],
})
export class SetAccountColorComponent implements OnInit {
  title: string = '';
  colors: string[] = [
    'rgba(151, 150, 150, 0.278)',
    'rgb(248, 69, 69)',
    'rgb(248, 123, 69)',
    'rgb(248, 185, 69)',
    'rgb(218, 235, 65)',
    'rgb(130, 235, 65)',
    'rgb(65, 235, 133)',
    'rgb(65, 235, 232)',
    'rgb(65, 170, 235)',
    'rgb(65, 82, 235)',
    'rgb(153, 65, 235)',
    'rgb(235, 65, 235)',
    'rgb(235, 65, 164)',
  ];

  constructor(
    private dialogRef: MatDialogRef<SetAccountIconDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.title = data.title;
  }

  ngOnInit() {}

  saveColor(color: any) {
    this.dialogRef.close(color);
  }
}
