import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from './../services/authentication.service'
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [
        `
            em { font-size:11px; color:red;}
        `]
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted: boolean;
    constructor(private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    save() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.authenticationService.authenticate(this.loginForm.value).subscribe(
                response => {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    this.router.navigate(['/users']);
                }
            );
        }
    }
}