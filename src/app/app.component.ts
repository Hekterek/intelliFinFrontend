import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MyFinancesProject';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkAuth();
  }
}
