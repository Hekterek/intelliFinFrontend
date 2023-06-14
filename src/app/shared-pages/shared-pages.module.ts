import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, MainMenuComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, MainMenuComponent],
})
export class SharedPagesModule {}
