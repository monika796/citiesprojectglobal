import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://digitractive.com/cityprojectglobal/graphql",
  cache: new InMemoryCache(),
});

export default client;
