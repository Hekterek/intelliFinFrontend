import { Component, Renderer2 } from '@angular/core';
import { menuBoxesModel } from '../models/menuBoxesModel';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  menuBoxes: menuBoxesModel = {
    accounts: false,
    categories: true,
    transactions: false,
    myGoals: false,
  };

  setFalse(): void {
    for (let el in this.menuBoxes) {
      this.menuBoxes[el] = false;
    }
  }
}
