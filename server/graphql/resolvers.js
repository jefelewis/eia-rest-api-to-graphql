// Imports: Dependencies
import axios from 'axios';

// Imports: API Key
import eaiAPIKey from '../../config/config';

// States
let states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // GENERATION OF ELECTRICITY
    // Annual Net Generation For United States
    getAnnualNetGenerationOfElectricityForUS: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.GEN.ALL-US-99.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Annual Net Generation By State
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
    // Average Retail Price For Electricity For United States (2001 - 2017)
    getAverageRetailPriceForElectricityForUS: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.PRICE.US-ALL.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Average Retail Price For Electricity By State (2001 - 2017)
    getAverageRetailPriceForElectricityByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.PRICE.${state}-ALL.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },


    // CARBON DIOXIDE EMISSIONS
    // Get All Carbon Dioxide Emissions For United States (1980 - 2014)
    getAllCarbonDioxideEmissionsForUS: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-TO-US.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get All Carbon Dioxide Emissions By State (1980 - 2014)
    getAllCarbonDioxideEmissionsByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Coal (1980 - 2014)
    getCarbonDioxideEmissionsByCoal: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-CO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Natural Gas (1980 - 2014)
    getCarbonDioxideEmissionsByNaturalGas: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-NG-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Petroleum (1980 - 2014)
    getCarbonDioxideEmissionsByPetroleum: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-PE-CO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },


    // CRUDE OIL IMPORTS
    // Get Crude Oil Imports From World To United States (Per Thousand Barrels) (2009 - 2017)
    getCrudeOilImports: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=PET_IMPORTS.WORLD-US-ALL.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },


    // NUCLEAR
    // Get Nuclear Outages (Which Nuclear Plants Are Still Active) (2007 - Present)
    getNuclearOutageByPlantId: (parent, args) => {
      let powerPlants = ["8055", "6040", "6022", "46", "6014"];

      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.OUT_PCT.${powerPlant}.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Nuclear Outages (2007 - Present)
    getNuclearOutageByPlantId: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.OUT.US.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Nuclear Capacity (2007 - Present)
    getNuclearCapcity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.CAP.US.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },


  },
};

// Exports
export default RESOLVERS;
