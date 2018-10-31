// Imports: Dependencies
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getAllCarbonDioxideEmissionsForUS: EIA1
    getAllCarbonDioxideEmissionsByState(state: String): EIA1
    getCoalCarbonDioxideEmissionsForUS: EIA1
    getCoalCarbonDioxideEmissionsByState(state: String): EIA1
    getNaturalGasCarbonDioxideEmissionsForUS: EIA2
    getNaturalGasCarbonDioxideEmissionsByState(state: String): EIA2
    getPetroleumCarbonDioxideEmissionsForUS: EIA2
    getPetroleumCarbonDioxideEmissionsByState(state: String): EIA2
    
    getCoalProduction: EIA1
    getNumberOfCoalMiners: 

    getCoalConsumptionForElectricity: EIA1
    getNaturalGasConsumptionForElectricity: EIA1
    getPetroleumLiquidsConsumptionForElectricity: EIA1
    getPetroleumCokeConsumptionForElectricity: EIA1

    getAnnualNetGenerationOfElectricityForUS: EIA1
    getAnnualNetGenerationOfElectricityByState(state: String): EIA1
    getAverageRetailPriceForElectricityForUS: EIA1
    getAverageRetailPriceForElectricityByState(state: String): EIA1

    getCrudeOilExportsForUSAnnually: EIA3
    getCrudeOilExportsForUSDaily: EIA3

    getCrudeOilImports: EIA3
    getCrudeOilImportsForUSAnnually: EIA3
    getCrudeOilImportsForUSDaily: EIA3

    getNuclearOutages: EIA1
    getNuclearOutageByPlantId(plantId: String): EIA1
    getNuclearCapacity: EIA1

    getPetroleumProductionByCountry: EIA1
    getNaturalGasProductionByCountry: EIA1
    getCoalProductionByCountry: EIA1
    getElectricityProductionByCountry: EIA1
  }

  type EIA1 {
    request: Request
    series: [Series1]
  }

  type EIA2 {
    request: Request
    series: [Series2]
  }

  type EIA3 {
    request: Request
    series: [Series3]
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
    data: [[String]]
  }
  
  type Series2 {
    series_id: String
    name: String
    units: String
    f: String
    copyright: String
    source: String
    geography: String
    start: String
    end: String
    updated: String
    data: [[String]]
  }

    type Series3 {
    series_id: String
    name: String
    units: String
    f: String
    unitsshort: String
    description: String
    copyright: String
    source: String
    iso3166: String
    geography: String
    geography2: String
    start: String
    end: String
    updated: String
    data: [[String]]
  }
`;

// Exports
export default TYPEDEFS;
