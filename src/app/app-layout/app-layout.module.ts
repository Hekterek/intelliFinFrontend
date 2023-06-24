import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPagesModule } from '../main-pages/main-pages.module';
import { SharedPagesModule } from '../shared-pages/shared-pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, MainPagesModule, SharedPagesModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class AppLayoutModule {}
