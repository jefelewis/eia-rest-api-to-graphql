// Imports: Dependencies
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getAnnualNetGenerationOfElectricityForUS: Data1
    getAnnualNetGenerationOfElectricityByState(state: String): Data1

    getCoalConsumptionForElectricity: Data1
    getNaturalGasConsumptionForElectricity: Data1
    getPetroleumLiquidsConsumptionForElectricity: Data1
    getPetroleumCokeConsumptionForElectricity: Data1

    getAverageRetailPriceForElectricityForUS: Data1
    getAverageRetailPriceForElectricityByState(state: String): Data1

    getAllCarbonDioxideEmissionsForUS: Data1
    getAllCarbonDioxideEmissionsByState(state: String): Data1

    getCoalCarbonDioxideEmissionsForUS: Data1
    getCoalCarbonDioxideEmissionsByState(state: String): Data1  

    getNaturalGasCarbonDioxideEmissionsForUS: Data1
    getNaturalGasCarbonDioxideEmissionsByState(state: String): Data1

    getPetroleumCarbonDioxideEmissionsForUs: Data1
    getPetroleumCarbonDioxideEmissionsByState(state: String): Data1

    getCrudeOilImports: Data2

    getNuclearOutages: Data2
    getNuclearOutageByPlantId(plantId: String): Data2
    getNuclearCapacity: Data2

    getPetroleumProductionByCountry: Data2
    getNaturalGasProductionByCountry: Data2
    getCoalProductionByCountry: Data2
    getElectricityProductionByCountry: Data2

    getCrudeOilImportsForUSAnnually: Data2
    getCrudeOilImportsForUSDaily: Data2

    getCrudeOilExportsForUSAnnually: Data2
    getCrudeOilExportsForUSDaily: Data2

  }

  type Data1 {
    request: Request
    series: [Series1]
  }

  type Request {
    command: String
    series_id: String
  }

  type Series1 {
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
  }

  type Data2 {
    request: Request
    series: [Series2]
  }

  type Series2 {
    series_id: String
    name: String
    units: String
    f: String
    unitsshort: String
    description: String
    source: String
    copyright: String
    source: String
    iso3166: String
    geography: String
    start: String
    end: String
    updated: String
  }
`;

// Exports
export default TYPEDEFS;
