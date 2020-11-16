import {Injectable} from '@angular/core';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  NextLink,
  NormalizedCacheObject,
  Operation
} from '@apollo/client/core';
import {GhApiService, User} from '../gh-api.service';
import {SearchUsers} from './user.graphql';

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

interface UserNode {
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

interface UserSearch {
  userCount: number;
  pageInfo: PageInfo;
  nodes: UserNode[];
}

interface GqlApiResult {
  search: UserSearch;
}


@Injectable({
  providedIn: 'root'
})
export class GhGqlApiService implements GhApiService {
  private apollo: ApolloClient<NormalizedCacheObject>;

  constructor() {
    const uri = 'https://api.github.com/graphql';

    const httpLink = createHttpLink({uri});
    const authLink = new ApolloLink((operation: Operation, forward: NextLink) => {
      operation.setContext(({headers = {}}) => ({
        headers: {
          ...headers,
          Authorization: `Bearer ${localStorage.getItem('ghToken')}`,
        }
      }));
      return forward(operation);
    });
    this.apollo = new ApolloClient({
      link: from([authLink, httpLink]),
      cache: new InMemoryCache()
    });
  }

  async getUsers(search: string): Promise<User[]> {
    const result = await this.apollo.query<GqlApiResult>({
      query: SearchUsers,
      variables: {
        query: search
      }
    });

    return result.data.search.nodes.map(node => ({
      login: node.login,
      name: node.name,
      avatarUrl: node.avatarUrl,
      followersCount: node.followers.totalCount,
      gistsCount: node.gists.totalCount
    }));
  }
}
