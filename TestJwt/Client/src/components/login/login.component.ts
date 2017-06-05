import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    template: require('./login.html')
})
export class LoginComponent {
    model: any = {};
    message = '';

    constructor(private router: Router, private authService: AuthService) { 
        authService.clear();
    }

    login() {
        this.message = '';
        this.authService.getToken(this.model.username, this.model.password).then(data => {
            console.log(data);
            this.router.navigate(['/']);
        }, error => this.message = error);
    }

}