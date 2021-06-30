import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser(
  $username: String!
  $password: String!
) {
  addUser(
    $username: String!
    password: $password
  ) {
    token
    user {
      _id
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
  mutation addPost($postText: String!) {
    addPOST(postText: $postText) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(thoughtId: $postId, commentBody: $commentBody) {
      _id
      commentCount
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
  mutation addBrewery($breweryName: String!) {
    addBrewery(breweryName: $breweryName) {
        _id
        name
        address {
          street
          city
          state
          postalCode
          country
        }
        location {
          latitude
          longitude
        }
        phone
        website
        createdAt
      }
    }
  }
`;
