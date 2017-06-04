import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, DataService]
})
export class AppModule { }