import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Detail from './detail';
import ScrollToTop from './Scroll';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from './+state/+features/theme';
import { fetchCountries, getAllCountries } from './+state/+features/countries';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const countries = useSelector(getAllCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    let body = document.getElementsByTagName('body')[0];
    if(theme === 'light_theme') {
      body.classList.add('light_theme');
      body.classList.remove('dark_theme');
    } else {
      body.classList.add('dark_theme');
      body.classList.remove('light_theme');
    }
  }, [theme]);

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
          <Header/>
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
