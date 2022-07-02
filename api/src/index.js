import { ApolloServer } from 'apollo-server';

import { schema } from './graphql';

const server = new ApolloServer({
  schema,
  cache: 'bounded',
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log('Server listening on ' + url);
});
