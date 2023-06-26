import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageModule } from './start-page/start-page.module';
import { SharedPagesModule } from './shared-pages/shared-pages.module';
import { MainPagesModule } from './main-pages/main-pages.module';
import { AppLayoutModule } from './app-layout/app-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedPagesModule,
    StartPageModule,
    MainPagesModule,
    AppLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
