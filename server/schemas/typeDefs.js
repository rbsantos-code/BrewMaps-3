const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    friendCount: Int
    posts: [Post]
    favorites: [Brewery]
  }

  type Post {
    _id: ID
    title: String
    body: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }

  type Address {
    street: String
    city: String
    state: String
    postalCode: String
    country: String
  }

  type Location {
    longitude: String
    latitude: String
  }

  type Brewery {
    _id: ID
    name: String!
    address: Address
    location: Location
    phone: String
    website: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addPost(title: String!, body: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFavorite(_id: ID!): Brewery
  }
`;

module.exports = typeDefs;
