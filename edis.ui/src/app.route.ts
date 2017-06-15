import { Routes } from '@angular/router';

import { LoginComponent } from './account/components/login.component'

export const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path:'users',
        loadChildren:'./user-management/user.module#UserModule'        
    }
]