import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './../services/user.service'
import { UserModel } from './../model/user.model'

@Component({
    selector: 'users-list',
    templateUrl: `./users-list.component.html`,
    styles: [
        `
            a { cursor: pointer;}
        `]
})
export class UsersListComponent {
    users: UserModel[];
    constructor(private userService: UserService,
        private router: Router) {

    }

    ngOnInit() {
        this.get();
    }

    remove(id: string) {
        console.log(id);
        this.userService.remove(id).subscribe(
            response => {
                this.get();
            }
        )
    }

    get() {
        this.userService.get().subscribe((response) => {
            this.users = response;
        })
    }
}