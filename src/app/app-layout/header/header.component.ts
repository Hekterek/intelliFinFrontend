import { Component, OnInit } from '@angular/core';
import * as timeService from '../../services/time/timeService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  accountBalance = 3152.0;
  newDate: any;

  ngOnInit(): void {
    this.newDate =
      timeService.getCurrentMonth() + ' ' + timeService.getCurrentYear();
  }
}
