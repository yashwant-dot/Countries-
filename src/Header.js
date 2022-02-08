import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, toggleTheme } from './+state/+features/theme';

const Header = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  return(
    <header>
      <div className="custom_container">
        <Link to='/'><h2>Where in the world?</h2></Link>
        <div>
          { theme === 'light_theme'
            ? <i className="far fa-moon"></i>
            : <i className="fas fa-moon"></i>
          }
          
          <span onClick={() => dispatch(toggleTheme())}>
            { theme === 'light_theme' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;