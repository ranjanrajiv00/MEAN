// app.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './account/services/authentication.service'
@Component({
  selector: 'my-app',
  templateUrl: './shared/components/app.component.html'
})
export class AppComponent {
  title: string = "edis";
  isAuthenticated: boolean;

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.authenticationService.onAuthenticated.subscribe(aa => {
      this.isAuthenticated = true;
    });
  }
}