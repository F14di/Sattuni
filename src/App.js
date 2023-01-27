import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
// import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import useScroll from './components/hooks/useScroll';
import ScrollObserver from './utils/scroll-observer';

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

const App = () => {

  const childRef = useRef();
  let location = useLocation();
  let [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    // const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useScroll(height=>{
    if(height > 0 ){
      setFixedHeader(true)
    }else if(height <10 ){
      setFixedHeader(false)
    }
  })

  return (
    <ScrollObserver>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} fixedHeader={fixedHeader}/>
          </Switch>
        )} />
    </ScrollObserver>
  );
}

export default App;