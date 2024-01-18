import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  currentUrl = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkCurrentUrl();
  }

  checkCurrentUrl() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }
}
