import {Component, OnInit} from '@angular/core';
import {User} from '../gh/gh-api.service';
import {GhGqlApiService} from '../gh/gql/gh-gql-api.service';

@Component({
  selector: 'app-gql-api-users',
  template: `
    <app-users [users]="users"></app-users>
  `,
  styleUrls: ['./gql-api-users.component.scss']
})
export class GqlApiUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private ghService: GhGqlApiService) {
  }

  ngOnInit(): void {
    this.ghService.getUsers('test').then(users => {
      this.users = users;
    });
  }

}
