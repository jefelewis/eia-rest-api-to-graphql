// Imports: Dependencies
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    testQuery: Test

  }

  type Test {
    test: String
  }

`;

// Exports
export default TYPEDEFS;
