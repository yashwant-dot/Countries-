import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ handleTheme }) => {
  const [light_theme, setLightTheme] = useState(true);

  const changeTheme = () => {
    handleTheme(light_theme);
    setLightTheme(!light_theme);
    
  }

  return(
    <header>
      <div className="container">
        <Link to='/'><h2>Where in the world?</h2></Link>
        <div>
          { light_theme
            ? <i className="far fa-moon"></i>
            : <i className="fas fa-moon"></i>
          }
          
          <span onClick={changeTheme}>
            { light_theme ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;