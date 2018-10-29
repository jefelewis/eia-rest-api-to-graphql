// Imports: Dependencies
import axios from 'axios';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // 
    testQuery: (parent, args) => {
      return axios.get(`http://api.eia.gov/`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
  },
};

// Exports
export default RESOLVERS;
