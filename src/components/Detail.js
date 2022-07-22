import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from './redux/covidAPI';
import { statsData } from './redux/covidReducer';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const storeCountry = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const countryFind = storeCountry.find((country) => country.country === name);

  useEffect(() => {
    if (storeCountry.length === 0) {
      getData().then((response) => dispatch(statsData(response)));
    }
  });

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <img src={countryFind.country_flag} alt="country-flag"/>
      </div>
      <div>
        <ul>
          <h3>Today&apos;s update</h3>
          <li>
            <p>Number of cases</p> {' '} {countryFind.cases.toLocaleString()}
          </li>
          <li>
            <p>Recent cases:</p> {' '} {countryFind.todayCases.toLocaleString()}
          </li>
          <li>
            <p>Number of death:</p> {' '} {countryFind.deaths.toLocaleString()}
          </li>
          <li>
            <p>Recent death:</p> {' '} {countryFind.todayDeaths.toLocaleString()}
          </li>
          <li>
            <p>Recent recovery:</p> {' '} {countryFind.recovered.toLocaleString()}
          </li>
          <li>
            <p>Number of recovery:</p> {' '} {countryFind.todayRecovered.toLocaleString()}
          </li>
          <li>
            <p>Active cases:</p> {' '} {countryFind.active.toLocaleString()}
          </li>
          <li>
            <p>Critical cases:</p> {' '} {countryFind.critical.toLocaleString()}
          </li>
          <li>
            <p>Cases per one million:</p> {' '} {countryFind.casesPerOneMillion.toLocaleString()}
          </li>
          <li>
            <p>Deaths per one million:</p> {' '} {countryFind.deathsPerOneMillion.toLocaleString()}
          </li>
          <li>
            <p>Number of tests:</p> {' '} {countryFind.tests.toLocaleString()}
          </li>
          <li>
            <p>Population:</p> {' '} {countryFind.population.toLocaleString()}
          </li>
          <li>
            <p>Continent:</p> {' '} {countryFind.continent}
          </li>
          <li>
            <p>Active per one million:</p> {' '} {countryFind.activePerOneMillion.toLocaleString()}
          </li>
          <li>
            <p>Recovered per one million:</p> {' '} {countryFind.recoveredPerOneMillion.toLocaleString()}
          </li>
          <li>
            <p>Critical per one million:</p> {' '} {countryFind.criticalPerOneMillion.toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;