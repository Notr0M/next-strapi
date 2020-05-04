import withApollo from "next-with-apollo";
// import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:1337/graphql",
});

/* const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: "shoping-frondend",
  version: "0.1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
}); */

export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) => {
    return new ApolloClient({
      link: link,
      cache: cache
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    });
  }
);
