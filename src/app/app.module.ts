import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageModule } from './start-page/start-page.module';
import { SharedPagesModule } from './shared-pages/shared-pages.module';
import { MainPagesModule } from './main-pages/main-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedPagesModule,
    StartPageModule,
    MainPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
