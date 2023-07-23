import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  accountBalance = 3152.0;
  newDate: string = 'September 2023';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
