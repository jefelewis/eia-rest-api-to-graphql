// Imports: Dependencies
import axios from 'axios';

// Import: API Key
import eaiAPIKey from '../../config/config';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // GENERATION OF ELECTRICITY
    // Annual Net Generation (United States)
    getAnnualNetGenerationOfElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.GEN.ALL-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // Annual Net Generation (By State)
    getAnnualNetGenerationOfElectricityByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.GEN.ALL-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // CONSUMPTION OF ELECTRICITY GENERATION
    // Coal (Thousand Tons)
    getCoalConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.COW-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // Natural Gas (Thousand MCF)
    getNaturalGasConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.NG-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    
    // Petroleum Liquids (Thousand Barrels)
    getPetroleumLiquidsConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.PEL-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // Petroleum Coke (Thousand Tons)
    getPetroleumCokeConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.PC-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // COST OF ELECTRICITY
    // Average Retail Price For Electricity
    getAverageRetailPriceForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.PRICE.US-ALL.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // CARBON DIOXIDE EMISSIONS
    // Get Carbon Dioxide Emissions By State
    getCarbonDioxideEmissionsByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-CO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
  },
};

// Exports
export default RESOLVERS;
