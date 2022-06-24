const { ApolloServer, gql } = require('apollo-server');

const { data } = require('./assets');

const typeDefs = gql`
  type Client {
    id: ID
    name: String
    email: String
    phone: String
  }

  type Query {
    clients: [Client]
  }
`;

const resolvers = {
  Query: {
    clients: () => data.client,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: 'bounded',
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log('Server listening on ' + url);
});
