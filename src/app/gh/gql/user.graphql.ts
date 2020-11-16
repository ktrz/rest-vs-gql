import {gql} from '@apollo/client/core';

export const SearchUsers = gql`
  query SearchUsers($query: String!) {
    search(type: USER, query: $query, first: 10) {
      userCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on User {
          login
          name
          avatarUrl
          followers {
            totalCount
          }
          gists {
            totalCount
          }
        }
      }
    }
  }
`;
