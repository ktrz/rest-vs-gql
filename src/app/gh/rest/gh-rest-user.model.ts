export interface RestApiSearchUser {
  login: string;
  name: string;
  avatar_url: string;
}

export interface RestApiUser {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  public_gists: number;
}
