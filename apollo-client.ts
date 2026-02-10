import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { relayStylePagination } from "@apollo/client/utilities"
import type { FieldFunctionOptions } from "@apollo/client/cache"

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          guestBooksConnection: relayStylePagination(),
          blogs: {
            //first merge func gets called and then read func. fetchMore always sends a network request which then comes back to the cache and gets merged
            //with the help of merge function. Then cache tries to read the query to send the required data back to the client. But if a read
            // function is present then the moment cache will try to read the query, it will instantly call the read function.
            read(
              existing: ReadonlyArray<unknown> = [],
              { args }: FieldFunctionOptions<{ skip?: number; first?: number }>
            ) {
              const skip = args?.skip ?? 0
              const first = args?.first ?? existing.length
              return existing.slice(skip, skip + first)
            },
            keyArgs: false,
            merge(
              existing: ReadonlyArray<unknown> = [],
              incoming: ReadonlyArray<unknown>,
              { args }: FieldFunctionOptions<{ skip?: number }>
            ) {
              const skip = args?.skip ?? 0
              const merged = existing.slice(0)
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i]
              }
              return merged
            },
          },
        },
      },
    },
  }),
})

export const currentWorkTab = makeVar<string>("All")
export const currentMenu = makeVar<number>(1)
export const currentWork = makeVar<null | string>(null)
export const showMenu = makeVar<boolean>(false)

export default client
