const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        posts: [Post]
    }

    type Post {
        _id: ID
        title: String
        body: String
        createdAt: String
        username: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        username: String
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
    }
`;

module.exports = typeDefs;