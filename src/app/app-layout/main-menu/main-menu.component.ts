import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  currentUrl = '';

  constructor(private router: Router) {
    console.log(router.url);

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.currentUrl = event.url;
      }
    });
  }
}
