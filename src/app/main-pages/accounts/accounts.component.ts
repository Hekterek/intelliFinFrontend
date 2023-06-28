import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [],
})
export class AccountsComponent implements AfterViewInit {
  test = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.test = true;
    }, 0);
  }
}
