import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { UserModel } from './../model/user.model'

declare var Materialize: any;

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
    userForm: FormGroup;
    submitted: boolean;
    userId: string;
    user: UserModel;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService) {
        this.userId = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            _id: '',
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(2)]],
            email: '',
            phone: ''
        });
        if (this.userId != 'new') {
            this.userService.getById(this.userId).subscribe(
                response => {
                    this.user = <UserModel>response;
                    (<FormGroup>this.userForm)
                        .setValue(this.user, { onlySelf: true });
                    Materialize.updateTextFields();
                }
            )
        }
    }

    save() {
        this.submitted = true;

        if (this.userForm.valid) {
            this.userService.save(this.userForm.value).subscribe(
                response => {
                }
            );
        }
    }

    cancel() {
        this.router.navigate(['/users']);
    }
}