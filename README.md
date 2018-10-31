# United States Energy Information Administration GraphQL API
*  [About The Data](#about-the-data)
*  [Built With](#built-with)
*  [Getting Started](#getting-started)
*  [GraphQL Query Examples](#graphql-query-examples)

## About The Data
Only a fraction of government agencies provide public APIs, which are usually poorly documented and built on REST architecture. Our mission is to retrieve that valuable data and convert them into an intuitive and modern GraphQL API.

The data comes directly from the United States Energy Information Administration's REST API. The REST endpoints have been mapped as GraphQL types and resolvers.
- A summary of endpoints and documentation can be found [here](https://www.eia.gov/opendata/commands.php).
- An API Key is required. You can sign up for a free API Key [here](https://www.eia.gov/opendata/register.php).

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
* [Node.js](https://nodejs.org/en) - JavaScript Runtime Environment
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel 7](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started
**1. Install Dependencies:**
```
npm install
```

**2. Start Server:**
```
npm run server
```

**3. Execute GraphQL Queries Here (Browser Automatically Opens On Server Start):**
```
http://localhost:4000/graphql
```

## GraphQL Query Examples
**Example #1: All Carbon Dioxide Emissions For United States (Million Metric Tons)**
```
{
  getAllCarbonDioxideEmissionsForUS {
    request {
      command
      series_id
    }
    series {
      series_id
      name
      units
      f
      description
      copyright
      source
      iso3166
      geography
      start
      end
      updated
      data
    }
  }
}
```

**Example #2: Carbon Dioxide Emissions From Coal For United States (Metric Tons)**
```
{
  getCoalCarbonDioxideEmissionsByState(state: "CA") {
    request {
      command
      series_id
    }
    series {
      series_id
      name
      units
      f
      description
      copyright
      source
      iso3166
      geography
      start
      end
      updated
      data
    }
  }
}
```

**Example #3: Carbon Dioxide Emissions From Natural Gas For United States (Metric Tons)**
```
{
  getNaturalGasCarbonDioxideEmissionsForUS {
    request {
      command
      series_id
    }
    series {
      series_id
      name
      units
      f
      copyright
      source
      geography
      start
      end
      updated
      data
    }
  }
}
```

**Example #4: Coal Consumption For Electricity (Tons)**
```
{
  getCoalConsumptionForElectricity {
    request {
      command
      series_id
    }
    series {
      series_id
      name
      units
      f
      description
      copyright
      source
      iso3166
      geography
      start
      end
      updated
      data
    }
  }
}
```

**Example #5: Crude Oil Exports (Barrels)**
```
{
  getCrudeOilExportsForUSAnnually {
    request {
      command
      series_id
    }
    series {
      series_id
      name
      units
      f
      unitsshort
      description
      copyright
      source
      iso3166
      geography
      geography2
      start
      end
      updated
      data
    }
  }
}
```