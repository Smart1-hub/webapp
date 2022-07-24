import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { FiSearch } from 'react-icons/fi';
import getData from '../redux/covid/covidApi';
import { statsData } from '../redux/covid/reducer';

const Home = () => {
  const storeCountry = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeCountry.length === 0) {
      getData().then((response) => dispatch(statsData(response)));
    }
  }, [storeCountry.length, dispatch]);

  let covidContinent = storeCountry.filter((item) => item.continent === 'Africa');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  covidContinent = covidContinent.filter((country) => country.country.includes(search));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const filterCountryOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  return (
    <div className="pages">
      <h1 className="area"> AFRICA</h1>
      <form className="form">
        <div className="search-bar">
          <FiSearch />
          <div>
            <input
              className="input-area"
              type="text"
              value={searchValue}
              placeholder="Search Here"
              onChange={filterCountryOnChange}
            />
          </div>
        </div>
      </form>
      <ul className="list-country">
        {covidContinent.map((country) => (
          <Link
            key={generate()}
            to={{ pathname: `/country/${country.country}` }}
          >
            <li className="list-details">
              <div className=" details">
                <h1 className="name">{country.country}</h1>
              </div>
              <div>
                <h2 className="pupalution">Population:</h2>
                {' '}
                <p className="number">{country.population.toLocaleString()}</p>
              </div>
              <div className="photo">
                <img
                  src={country.country_flag}
                  alt="national flag"
                  className="national-flag"
                />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
