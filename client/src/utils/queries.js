import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
query posts($username: String) {
  posts(username: $username) {
    _id
    body
    createdAt
    username
    commentCount
    comments {
      _id
      username
      commentBody
      createdAt
    }
  }
}
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      body
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        createdAt
        commentCount
      }
      favorites {
        id
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

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      favorites {
        id
      }
    }
  }
`;


export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
    }
  }
`;

// Adding queries from server side
