/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      username
      s3key
      comments {
        items {
          postID
          createdAt
          username
          content
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        s3key
        comments {
          items {
            postID
            createdAt
            username
            content
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($postID: ID!, $createdAt: AWSDateTime!) {
    getComment(postID: $postID, createdAt: $createdAt) {
      postID
      createdAt
      username
      content
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $postID: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      postID: $postID
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        postID
        createdAt
        username
        content
        updatedAt
      }
      nextToken
    }
  }
`;
