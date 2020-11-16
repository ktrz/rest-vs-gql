import { Injectable } from '@angular/core';
import {GhApiService, User} from '../gh-api.service';
import {users} from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class GhGqlApiService implements GhApiService {
  async getUsers(search: string): Promise<User[]> {
    return users;
  }
}
