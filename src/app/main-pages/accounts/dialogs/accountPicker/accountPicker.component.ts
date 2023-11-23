import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { account } from 'src/app/models/accountModels';

@Component({
  selector: 'app-accountPicker',
  templateUrl: './accountPicker.component.html',
  styleUrls: ['./accountPicker.component.scss'],
})
export class AccountPickerComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) protected data: account[]) {}

  ngOnInit() {}
}
