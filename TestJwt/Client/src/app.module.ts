import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, DataService, AuthGuard]
})
export class AppModule { }