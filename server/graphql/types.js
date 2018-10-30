// Imports: Dependencies
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getAnnualNetGenerationOfElectricityForUS: Test
    getAnnualNetGenerationOfElectricityByState(state: String): Test

    getCoalConsumptionForElectricity: Test
    getNaturalGasConsumptionForElectricity: Test
    getPetroleumLiquidsConsumptionForElectricity: Test
    getPetroleumCokeConsumptionForElectricity: Test

    getAverageRetailPriceForElectricityForUS: Test
    getAverageRetailPriceForElectricityByState(state: String): Test

    getAllCarbonDioxideEmissionsForUS: Test
    getAllCarbonDioxideEmissionsByState(state: String): Test

    getCoalCarbonDioxideEmissionsForUS: Test
    getCoalCarbonDioxideEmissionsByState(state: String): Test  

    getNaturalGasCarbonDioxideEmissionsForUS: Test
    getNaturalGasCarbonDioxideEmissionsByState(state: String): Test

    getPetroleumCarbonDioxideEmissionsForUs: Test
    getPetroleumCarbonDioxideEmissionsByState(state: String): Test

    getCrudeOilImports: Test

    getNuclearOutages: Test
    getNuclearOutageByPlantId(plantId: String): Test
    getNuclearCapacity: Test

    getPetroleumProductionByCountry: Test
    getNaturalGasProductionByCountry: Test
    getCoalProductionByCountry: Test
    getElectricityProductionByCountry: Test

    getCrudeOilImportsForUSAnnually: Test
    getCrudeOilImportsForUSDaily: Test

    getCrudeOilExportsForUSAnnually: Test
    getCrudeOilExportsForUSDaily: Test

  }

  type Test {
    request: Request
    series: [Series]
  }

  type Request {
    command: String
    series_id: String
  }

  type Series {
    series_id: String
    name: String
    units: String
    f: String
    description: String
    copyright: String
    source: String
    iso3166: String
    geography: String
    start: String
    end: String
    updated: String
    data: [String]
  }
`;

// Exports
export default TYPEDEFS;
