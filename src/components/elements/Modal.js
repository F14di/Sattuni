import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDom from 'react-dom'

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    className
  );

  return (
      show && ReactDom.createPortal(
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          <div className="modal-inner" onClick={stopProgagation}>
            {children}
          </div>
        </div>
      , document.getElementById('portal'))
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;