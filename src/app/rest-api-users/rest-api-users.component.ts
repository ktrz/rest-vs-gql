import {Component, OnInit} from '@angular/core';
import {User} from '../gh/gh-api.service';
import {GhRestApiService} from '../gh/rest/gh-rest-api.service';

@Component({
  selector: 'app-rest-api-users',
  template: `
    <app-users [users]="users"></app-users>
  `,
  styleUrls: ['./rest-api-users.component.scss']
})
export class RestApiUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private ghService: GhRestApiService) {
  }

  ngOnInit(): void {
    this.ghService.getUsers('test').then(users => {
      this.users = users;
    });
  }

}
