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
<<<<<<< HEAD
    _id: ID
=======
    id: ID
>>>>>>> 43d9ff4f65fb59d8ca468ec41759e8d4fc582271
  }

  type Auth {
    token: ID!
    user: User
  }
type Apikey {
  value: String
}
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    env: Apikey
  }

  type Mutation {
    login(username: String!, password: String!): Auth

    addUser(username: String!, password: String!): Auth

    addPost(body: String!): Post

    addComment(postId: ID!, commentBody: String!): Post

    addBrewery(id: ID!): Brewery

    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
