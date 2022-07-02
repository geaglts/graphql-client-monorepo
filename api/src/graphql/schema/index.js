import path from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

import resolvers from '../resolvers';

const mainSchemaPath = path.join(__dirname, './files/main.graphql');

const config = { loaders: [new GraphQLFileLoader()] };

const schema = loadSchemaSync(mainSchemaPath, config);

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

export default schemaWithResolvers;
