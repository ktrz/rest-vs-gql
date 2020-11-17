import {Injectable} from '@angular/core';
import {GhApiService, User} from '../gh-api.service';
import {users} from '../mock-users';
import {RestApiSearchUser, RestApiUser} from './gh-rest-user.model';

@Injectable({
  providedIn: 'root'
})
export class GhRestApiService implements GhApiService {
  async getUsers(search: string): Promise<User[]> {
    if (!search) {
      return users;
    }
    const searchUsersResult = await this.get(`https://api.github.com/search/users?q=${search}&per_page=10`);
    const searchUsers: RestApiSearchUser[] = searchUsersResult.items;

    const usersResult: RestApiUser[] = await Promise.all(searchUsers.map(({login}) => this.get(`https://api.github.com/users/${login}`)));


    return usersResult.map(searchUser => ({
      login: searchUser.login,
      name: searchUser.name,
      avatarUrl: searchUser.avatar_url,
      followersCount: searchUser.followers,
      gistsCount: searchUser.public_gists
    }));
  }

  private async get(url: string): Promise<any> {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `token ${localStorage.getItem('ghToken')}`
      },
    });

    return await response.json();
  }
}
