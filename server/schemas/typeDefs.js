const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    projects: String
    bio: String
  }

  // type Query {
  //   categories: [Category]
  //   products(category: ID, name: String): [Product]
  //   product(_id: ID!): Product
  //   user: User
  //   checkout(products: [ID]!): Checkout
  // }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, bio: String!, projects: String): Auth
    updateUser(firstName: String, lastName: String, email: String, bio: String!, projects: String): User
  }
`;

module.exports = typeDefs;
