// Imports: Dependencies
import { ApolloServer } from 'apollo-server-express';

// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './types';
import RESOLVERS from './resolvers';

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light',
    },
  },
});

// Exports
export default SERVER;
