import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="header">
      <button mat-button routerLink="rest">Rest example</button>
      <button mat-button routerLink="gql">GraphQL example</button>
    </mat-toolbar>
    <div class="content">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
    <div class="footer"></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
