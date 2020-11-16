import {Component, Input} from '@angular/core';
import {User} from '../gh/gh-api.service';

@Component({
  selector: 'app-user',
  template: `
    <mat-card *ngIf="user">
      <mat-card-header>
        <img mat-card-avatar [src]="user.avatarUrl">
        <mat-card-title>{{user.login}}</mat-card-title>
        <mat-card-subtitle>{{user.name}}</mat-card-subtitle>
        <mat-card-subtitle>Followers: {{user.followersCount}}</mat-card-subtitle>
        <mat-card-subtitle>Gists: {{user.gistsCount}}</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user?: User;
}
