import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries';

const getData = async () => {
  const statistics = [];
  const response = await axios.get(url);
  const statResponse = response.data;

  statResponse.map(({ countryInfo: { _id: id, flag}, ...data}) => {
    const covidStat = {
      continent: data.continent,
      population: data.population,
      cases: data.cases,
      id_country: id,
      country_flag: flag,
      no_deaths: deaths,
      current_death: data.todayCases,
      no_recovered: data.recovered,
      current_recovery: data.todayRecovered,
      active_cases: data.active,
      critical_cases: data.critical,
      case_population: data.casesPerOneMillion,
      deaths_population: data.deathsPerOneMillion,
      test: data.tests,
      active_population: data.activePerOneMillion,
      recovered_pop: data.recoveredPerOneMillion,
      critical_pop: data.criticalPerOneMillion
    };
    return statistics.push(covidStat);
  });
};

export default getData;