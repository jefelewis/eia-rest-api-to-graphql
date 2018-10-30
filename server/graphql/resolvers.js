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
    // // Get All Carbon Dioxide Emissions For United States (1980 - 2014)
    // getAllCarbonDioxideEmissionsForUS: (parent, args) => {
    //   return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-TO-US.A`)
    //     .then(response => response.data)
    //     .catch(error => console.log(error));
    // },

    // Get All Carbon Dioxide Emissions For United States (1980 - 2016)
    getAllCarbonDioxideEmissionsForUS: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=INTL.4008-8-USA-MMTCD.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get All Carbon Dioxide Emissions By State (1980 - 2014)
    getAllCarbonDioxideEmissionsByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Coal Carbon Dioxide Emissions For United States (1980 - 2016)
    getCoalCarbonDioxideEmissionsForUs: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=INTL.4002-8-USA-MMTCD.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Coal (1980 - 2014)
    getCoalCarbonDioxideEmissionsByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-TT-CO-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Natural Gas Carbon Dioxide Emissions For United States (1980 - 2016)
    getNaturalGasCarbonDioxideEmissionsForUS: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=INTL.4004-8-USA-MMTCD.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Natural Gas (1980 - 2014)
    getNaturalGasCarbonDioxideEmissionsByState: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=EMISS.CO2-TOTV-NG-${state}.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Petroleum Carbon Dioxide Emissions For United States (1980 - 2015)
    getPetroleumCarbonDioxideEmissionsForUs: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=INTL.4006-8-USA-MMTCD.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Carbon Dioxide Emissions By Petroleum (1980 - 2014)
    getPetroleumCarbonDioxideEmissionsByState: (parent, args) => {
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
    // Nuclear Outages (2007 - Present)
    getNuclearOutages: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.OUT.US.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Nuclear Outages (Which Nuclear Plants Are Still Active) (2007 - Present)
    getNuclearOutageByPlantId: (parent, args) => {
      let powerPlants = ["8055", "6040", "6022", "46", "6014"];

      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.OUT_PCT.${powerPlant}.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Nuclear Capacity (2007 - Present)
    getNuclearCapacity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=NUC_STATUS.CAP.US.D`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },




    // INTERNATIONAL PRODUCTION
    // Get Petroleum Production By Country
    getPetroleumProductionByCountry: (parent, args) => {
      return axios.get(``)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Natural Gas Production By Country
    getNaturalGasProductionByCountry: (parent, args) => {
      return axios.get(``)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Coal Production By Country
    getCoalProductionByCountry: (parent, args) => {
      return axios.get(``)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Electricity Production By Country
    getElectricityProductionByCountry: (parent, args) => {
      return axios.get(``)
        .then(response => response.data)
        .catch(error => console.log(error));
    },


    // INTERNATIONAL CONSUMPTION


    
    // INTERNATIONAL RESERVES AND CAPACITY




    // INTERNATIONAL IMPORTS
    // Get Imports Of Crude Oil Annually (1981 - 2017)
    getCrudeOilImportsForUSAnnually: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}E&series_id=PET.MTTIMUS1.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Imports Of Crude Oil Daily (1981 - 2017)
    getCrudeOilImportsForUSDaily: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}E&series_id=PET.MTTIMUS2.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },



    // INTERNATIONAL EXPORTS
    // Get Exports Of Crude Oil Annually (1870 - 2017)
    getCrudeOilExportsForUSAnnually: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=PET.MCREXUS1.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Exports Of Crude Oil Daily
    getCrudeOilExportsForUSDaily: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=PET.MCREXUS2.A`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
  },
};

// Exports
export default RESOLVERS;
