import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { setContext } from '@apollo/client/link/context';
import { getItem, setItem } from './utils/localStorage';
import { onError } from '@apollo/client/link/error';

// Create a dynamic middleware to add the token to headers
const authLink = setContext(() => {
  const vbkSystem = getItem('vbk_system');
  return {
    headers: {
      Authorization: vbkSystem ? `Bearer ${vbkSystem?.user.token}` : null,
    },
  };
});

// Create a dynamic middleware to handle errors
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    const errors = graphQLErrors.find((error) => error.message);
    if (errors) {
      const { message } = errors;
      const isTokenExpired = message.includes('Token is expired or invalid');
      if (isTokenExpired) {
        setItem('vbk_system', null);
        window.location.reload();
      }
    }
  }
});

const endPointDefault = createUploadLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    'apollo-require-preflight': 'true',
    'ContentType': 'multipart/form-data',
  },
});

export const GraphQLClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink.concat(endPointDefault)]),
  cache: new InMemoryCache(),
});
