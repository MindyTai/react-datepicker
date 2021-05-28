import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, handleClick }) => <button className="w-full" onClick={ handleClick }>{ type }</button>;

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
};
