{
  getAnnualNetGenerationOfElectricityByState(state: "CA") {
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