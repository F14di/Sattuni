import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterSocial from './partials/FooterSocial';
import Modal from '../elements/Modal'
import TermsAndConditions from '../sections/TermsAndConditions';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const [showModal, setShowModal] = useState(false)
  const [currentTermType, setCurrentTermType]  = useState('Impressum')

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  function showTermsModal(termTypeToShow){
    setCurrentTermType(termTypeToShow)
    setShowModal(true);
  }
  function removePortal(){
    setShowModal(false)
  }

  return (
    <>
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames( 'site-footer-inner', topDivider && 'has-top-divider' )}>
            <div className="footer-top space-between text-xxs">
              <Logo width={32} height={32} />
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <div className="footer-copyright">Sattuni. All rights reserved</div>
            </div>
            <div className="termsAndConditionsButtons">
              <button onClick={()=>showTermsModal('Impressum')}>Impressum</button>
              <button onClick={()=>showTermsModal('Datenschutzerklärung')}>Datenschutzerklärung</button>
            </div>
          </div>
        </div>
      </footer>
      <Modal handleClose={removePortal} show={showModal}>
        <TermsAndConditions termName={currentTermType}></TermsAndConditions>
      </Modal>
    </>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;