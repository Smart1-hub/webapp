import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries';

const getData = async () => {
  const statistics = [];
  const response = await axios.get(url);
  const statResponse = response.data;

  statResponse.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidStat = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };
    return statistics.push(covidStat);
  });
  return statistics;
};

export default getData;
