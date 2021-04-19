import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = ({ countries }) => {



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
  
  console.log('Main renders');
  return(
    <section className="section-a">
      <div className="container">
        <div className="operation">
          <input type="text" placeholder="Search for a country...."/>
          <p>Filter Me</p>
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

export default Main;