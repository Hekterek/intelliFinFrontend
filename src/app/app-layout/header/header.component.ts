import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  accountBalance = 3152.0;
  newDate: string = 'September 2023';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }
}
