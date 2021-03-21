import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */

const link = new HttpLink({ uri: 'http://localhost:9000' })
const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache
})

const query = gql` 
{
    users(input: { firstName: "Aaron" }) {
    id
    firstName
    lastName
    email
    bills {
      name
      id
      dueDate: dueDay
    }
  }
}
`
client.query({ query }).then(result => console.log(result))

export default client