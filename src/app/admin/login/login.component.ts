import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: "./login.component.html"
})

export class LoginComponent {

    public user = new User('admin@admin.com', '');
    public errorMessage = '';

    constructor(private service: AuthenticationService, private router: Router) { }

    login() {       
        if (!this.service.login(this.user)) {
            this.errorMessage = 'Failed to login';
        }
        else {
            this.router.navigate(['/admin']);
        }
    }    

    goBack() {
        window.history.back();
    }
}