export interface User {
  name: string;
  login: string;
  followersCount: number;
  gistsCount: number;
  avatarUrl: string;
}

export interface GhApiService {
  getUsers(search: string): Promise<User[]>;
}
