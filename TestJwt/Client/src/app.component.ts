import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  template: require('./app.html')
})
export class AppComponent {
  result = '';

  constructor(private authService: AuthService, private dataService: DataService) { }

  login() {
    this.authService.getToken('user', 'user').then(data => {
      console.log(data.access_token);
      localStorage.setItem('access_token', data.access_token);
    }, error => this.result = error);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getAuth() {
    this.dataService.getAuthtenticate().then(data => {
      this.result = data;
    }, error => this.result = error);
  }

  getAuthorize() {
    this.dataService.getAuthorize().then(data => {
      this.result = data;
    }, error => this.result = error);
  }
}