import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editAccount',
  templateUrl: './editAccount.component.html',
  styleUrls: ['./editAccount.component.scss'],
  standalone: true,
})
export class EditAccountComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openEditName() {}
}
