export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface UserNode {
  login: string;
  name: string;
  avatarUrl: string;
  followers: {
    totalCount: number
  };
  gists: {
    totalCount: number;
  };
}

export interface UserSearch {
  userCount: number;
  pageInfo: PageInfo;
  nodes: UserNode[];
}

export interface GqlApiResult {
  search: UserSearch;
}
