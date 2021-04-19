import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function Scroll({ history, children }) {
  useEffect(() => {
    
    history.listen(() => {
      window.scrollTo(0, 0);
    });
    
    // return () => {
    //   unlisten();
    // }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}
const ScrollToTop = withRouter(Scroll);
export default ScrollToTop;