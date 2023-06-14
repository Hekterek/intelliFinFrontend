import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { SharedPagesModule } from '../shared-pages/shared-pages.module';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [CategoriesComponent, AccountsComponent],
  imports: [CommonModule, SharedPagesModule],
})
export class MainPagesModule {}
