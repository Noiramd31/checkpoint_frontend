import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const GRAPHQL_URI = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: GRAPHQL_URI,
  credentials: "include",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
