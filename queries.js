/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTest = /* GraphQL */ `
  query GetTest($id: String!) {
    getTest(id: $id) {
      id
      password
      username
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: TableTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        password
        username
      }
      nextToken
    }
  }
`;
