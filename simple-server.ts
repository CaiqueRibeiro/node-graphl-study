import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

/*
* Under fetching: HTTP route that do not return enough data
* Over fetching: HTTP route returns a unnecessary data
*/

/*
* this style is Schema-first approach
*/

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`

interface User {
  id: string
  name: string
}

const users: User[] = []

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },
    Mutation: {
      createUser: (parent, args, ctx) => {
        const user = {
          id: randomUUID(),
          name: args.name,
        }

        users.push(user)
        return user
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`)
})

/* REQUESTS

mutation CreateUser($name: String!) {
  createUser(name: $name) {
    id
  }
}

query Users {
  users {
    id,
    name
  }
}

*/