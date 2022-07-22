import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { FaSearchLocation } from 'react-icons/fa';
import getData from './redux/covidAPI';
import { statsData } from './redux/covidReducer';

const Home = () => {
  const storeCountry = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeCountry.length === 0) {
      getData().then((response) => dispatch(statsData(response)));
    }
  }, [storeCountry.length, dispatch]);
};

return (
  <div>
    <ul>
      {covidContinent.map((country) => (
        <Link key={generate()} to={{ pathname: `/country/${country.country}`}}>
          <li>
            <div>
              <h1>{country.country}</h1>
            </div>
            <div>
              <h2>continent:</h2> {' '}
              <p>{country.continent}</p>
            </div>
            <div>
              <img src={country.country_flag} alt='country flag'/>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Home;