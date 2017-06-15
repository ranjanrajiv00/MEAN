import { UsersListComponent } from './components/users-list.component'
import { UserDetailsComponent } from './components/user-details.component'

export const userRoutes = [
    {
        path: '', component: UsersListComponent, pathMatch: 'full'
    },
    {
        path: 'details/:id', component: UserDetailsComponent
    }
]