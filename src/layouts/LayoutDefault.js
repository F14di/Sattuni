import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/partials/Banner';
import classNames from 'classnames';

const LayoutDefault = ({ children, fixedHeader }) => {
  const classes = classNames(
    'reveal-from-bottom',
    'is-revealed',
    fixedHeader && `header-fixed`,
  )
  return (
  <>
    <Header navPosition="right" className={classes} />
    <main className="site-content">
      {children}
    </main>
    <Banner />
    <Footer />
  </>
)};

export default LayoutDefault;  