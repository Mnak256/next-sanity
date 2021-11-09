import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'https://y5y5f3dw.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
})

export const getGqlData = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query GetLaunches {
        allContent {
          key
          value
        }
      }
    `
  })
  return {
    props: {
      data
    }
  }
}

export const getMessageBoard = async () => {
  const {
    data: { allMessageBoard }
  } = await apolloClient.query({
    query: gql`
      query GetLaunches {
        allMessageBoard {
          message
        }
      }
    `
  })
  return allMessageBoard
}

export default apolloClient
