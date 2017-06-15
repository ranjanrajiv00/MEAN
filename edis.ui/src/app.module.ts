import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { appRoutes } from './app.route'
import { AppComponent } from './app.component';
import { LoginComponent } from './account/components/login.component'
import { HttpService } from './shared/services/http.service'
import { AuthenticationService } from './account/services/authentication.service'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        {
            provide: HttpService,
            useFactory: (backend: XHRBackend, options: RequestOptions) => {
                return new HttpService(backend, options);
            },
            deps: [XHRBackend, RequestOptions]
        },
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}