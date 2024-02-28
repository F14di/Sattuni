import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import SmoothScroll from '../elements/SmoothScroll';
import { ScrollContext } from '../../utils/scroll-observer';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const {scrollY} = useContext(ScrollContext);

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    scrollY > 50 && 'header-fixed',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
      <div className='nav-bg-color'></div>
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo width={64} height={64} src={require(`./../../../src/assets/images/logo/Logo for Website/256.png`)}/>
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <SmoothScroll to="section-hero"> <h5 to="/" onClick={closeMenu}>Startseite</h5></SmoothScroll>
                    </li>
                    <li>
                      <SmoothScroll to="features-catering"> <h5 to="/" onClick={closeMenu}>Catering</h5></SmoothScroll>
                    </li>
                    <li>
                      <SmoothScroll to="features-brief-menu"> <h5 to="/" onClick={closeMenu}>Galerie</h5></SmoothScroll>
                    </li>
                    <li>
                      <SmoothScroll to="features-split"> <h5 to="/" onClick={closeMenu}>Essen Lieferservice</h5></SmoothScroll>
                    </li>
                    <li>
                      <SmoothScroll to="contact_us_form"> <h5 to="/" onClick={closeMenu}>Kontakt</h5></SmoothScroll>
                    </li>
                  </ul>
                </div>
              </nav>
            </>}
        </div>

      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
