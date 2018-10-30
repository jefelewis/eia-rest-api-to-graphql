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
    getAverageRetailPriceForElectricityByState: Test

    getAllCarbonDioxideEmissionsForUS: Test
    getAllCarbonDioxideEmissionsByState: Test

    getNaturalGasCarbonDioxideEmissionsForUS: Test
    getNaturalGasCarbonDioxideEmissionsByState: Test

    getPetroleumCarbonDioxideEmissionsForUs: Test
    getPetroleumCarbonDioxideEmissionsByState: Test

    getCrudeOilImports: Test

    getNuclearOutages: Test
    getNuclearOutageByPlantId: Test
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
    test: String
  }

`;

// Exports
export default TYPEDEFS;
