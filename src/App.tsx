import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import CountriesList from "./smart-components/Countries";

const url = 'https://countries.trevorblades.com';

const errorLink = onError(({ graphQLErrors }): any => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }): string => {
      return message;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: url }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App(): any {
  return (
    <ApolloProvider client={client}>
      <CountriesList />
    </ApolloProvider>
  );
}

export default App;
