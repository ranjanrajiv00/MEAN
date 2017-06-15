import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { userRoutes} from './user.route'
import { UsersListComponent } from './components/users-list.component'
import { UserDetailsComponent } from './components/user-details.component'
import { UserService } from './services/user.service'

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        UsersListComponent,
        UserDetailsComponent
    ],
    providers:[
        UserService
    ]
})
export class UserModule
{

}