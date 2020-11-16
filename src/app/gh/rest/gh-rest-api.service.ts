import {Injectable} from '@angular/core';
import {GhApiService, User} from '../gh-api.service';
import {users} from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class GhRestApiService implements GhApiService {
  async getUsers(search: string): Promise<User[]> {
    return users;
  }
}
