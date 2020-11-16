import {Component, Input} from '@angular/core';
import {User} from '../gh/gh-api.service';

@Component({
  selector: 'app-users',
  template: `
    <app-user *ngFor="let user of users" [user]="user" class="user"></app-user>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: User[] = [];

}
