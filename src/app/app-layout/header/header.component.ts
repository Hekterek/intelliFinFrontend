import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  accountBalance = 3152.0;
  newDate: string = 'September 2023';

  constructor() {}

  ngOnInit(): void {}
}
