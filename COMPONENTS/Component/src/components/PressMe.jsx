
import React from 'react';
import PropTypes from 'prop-types';

const PressMe = ({ label, onClick, type = 'button', className = '', disabled = false , children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      disabled={disabled}
     
    >
      {label}
      {children}
    </button>
  );
};

PressMe.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children:PropTypes.node
};

export default PressMe;
