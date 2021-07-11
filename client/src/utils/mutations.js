import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($body: String!) {
    addPost(body: $body) {
      _id
      body
      createdAt
      commentCount
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_BREWERY = gql`
  mutation addBrewery($id: ID!) {
    addBrewery(id: $id) {
        id
    }
  }
`;


export const REMOVE_BREWERY = gql`
  mutation removeBrewery($id: ID!) {
    removeBrewery(id: $id) {
      id
    }
  }
`;