import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { SharedPagesModule } from '../shared-pages/shared-pages.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, SharedPagesModule],
})
export class MainPagesModule {}
