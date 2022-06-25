const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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
    clients: async () => {
      const clients = await prisma.client.findMany();
      return clients;
    },
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
