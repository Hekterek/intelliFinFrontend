import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPagesModule } from '../main-pages/main-pages.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, MainMenuComponent],
  imports: [CommonModule, MainPagesModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class AppLayoutModule {}
