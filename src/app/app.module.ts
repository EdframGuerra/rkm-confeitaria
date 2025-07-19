import { SharedModule } from './shared/shared.module';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { App } from './app';
import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
