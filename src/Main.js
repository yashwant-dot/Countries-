import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = ({ allCountries }) => {
  const [countries, setCountries] = useState(allCountries);
  
  const regions = ['All', ...new Set(allCountries.map(country => country.region ))];
  regions.pop();

  const list = regions.map((region, index) => <p key={index} className='dropdown-item' onClick={() => handleFilter(region)}>{region}</p>);

  const Card = ({ country }) => {
    return(
      <Link to={`/${country.alpha3Code}`}>
        <div className="card">
          <img src={country.flag} alt="flag"/>
          <div className="info">
            <h2>{country.name}</h2>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
          </div>
        </div>
      </Link>
    );
  }

  const cards = countries.map((country, index) => {
    return(
      <div key={index}>
        <Card country={country}/>
      </div>
    );
  })
  
  const handleSearch = (value) => {
    if(!value) {
      setCountries(allCountries);
      return;
    }
    const searchResult = allCountries.filter((country) => String(country.name).toLowerCase().startsWith(String(value).toLowerCase()));
    setCountries(searchResult);
  }

  const handleFilter = (region) => {
    if(region === 'All') {
      setCountries(allCountries);
      return;
    }
    const filteredCountries = allCountries.filter(country => country.region === region);
    setCountries(filteredCountries);
  } 

  return(
    <section className="section-a">
      <div className="custom_container">
        <div className="operation">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by region
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {list}
            </div>
          </div>
          <input type="text" placeholder="Search for a country...." onChange={(e) => handleSearch(e.target.value)}/>
        </div>

        <div className="content">
          <div className="card_container">
            {cards}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Main);