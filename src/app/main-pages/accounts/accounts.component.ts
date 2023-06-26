import { AfterViewInit, Component } from '@angular/core';
import {
  fadeInRightBigOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [
    fadeInRightBigOnEnterAnimation(),
    slideOutDownOnLeaveAnimation({ translate: '1000px' }),
    ,
  ],
})
export class AccountsComponent implements AfterViewInit {
  // componentActif = 'accounts';
  toggleAnimation: boolean = true;
  animationDisabled: boolean = true;
  test = true;

  toggleAnim() {
    this.toggleAnimation = !this.toggleAnimation;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationDisabled = false;
      this.test = false;
    }, 0);
  }
}
