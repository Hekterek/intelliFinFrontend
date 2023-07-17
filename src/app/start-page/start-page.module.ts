import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, WelcomePageComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class StartPageModule {}
