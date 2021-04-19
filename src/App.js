import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Detail from './detail';
import ScrollToTop from './Scroll';

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleTheme = (light_theme) => {
    let body = document.getElementsByTagName('body')[0];
    
    if(light_theme) {
      body.classList.add('dark_theme');
      body.classList.remove('light_theme');
    } else {
      body.classList.add('light_theme');
      body.classList.remove('dark_theme');
    }
  }

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      setCountries(data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('light_theme');
    fetchCountries();
  }, []);



  const DetailComponent = ({ match }) => {
    const country = countries.filter(country => country.alpha3Code === match.params.id)[0];
    
    let borderCountries = [];
    
    country.borders.forEach(code => {
      let country = countries.filter(country => country.alpha3Code === code)[0];
      borderCountries.push(country);
    });

    return(
      <Detail country={country} borders={borderCountries}/>
    );
  }

  return(
    <Router>
      <div>
        <ScrollToTop >
          <Header handleTheme={handleTheme}/>
          <Switch>
            <Route exact path='/' component={() => <Main allCountries={countries} /> } />
            <Route path='/:id' component={DetailComponent}/>
          </Switch>
        </ScrollToTop >
      </div>
    </Router>
  );





}

export default App;
