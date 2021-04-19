import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './detail.css';

const Detail = ( { country, borders } ) => {
  const history = useHistory();
  
  return(
    <section className="section-b">
      <div className="custom_container">
        <button className="back" onClick={history.goBack}><i className="fas fa-arrow-left"></i>Back</button>
        <div className="grid_container">
          <img src={country.flag} alt="flag"/>

          <Info country={country} borders={borders}/>
        </div>
      </div>
    </section>
  );
}

const Info = ({ country, borders }) => {
  const items = borders.map((border, index) => {
    return(
      <Link key={index} className="border" to={`/${border.alpha3Code}`}>{border.name}</Link>
    );
  })

  return(
    <div className='info_detail'>
      <h2>{country.name}</h2>
      <div className="content_detail">
        <div>
          <p>Native Name: <span>{country.nativeName}</span></p>
          <p>Population: <span>{country.population}</span></p>
          <p>Region: <span>{country.region}</span></p>
          <p>Sub Region: <span>{country.subregion}</span></p>
          <p>Capital: <span>{country.capital}</span></p>
        </div>

        <div>
          <p>Top Level Domain: <span>{country.topLevelDomain[0]}</span></p>
          <p>Curriencies: <span>{country.currencies[0].name}</span></p>
          <p>Languages: {country.languages.map((lang, index) => <span key={index}>{`${lang.name}  `}</span> )}
          </p>
        </div>
      </div>
      <p className="title">Border Countries:</p>
      <div className="items">
        {items}
      </div>
    </div>
  );
}

export default Detail;