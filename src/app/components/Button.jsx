import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ type, handleClick, disabled }) => <button className={ classNames('w-full focus:outline-none', { 'text-gray-400 cursor-default': disabled }) } onClick={ handleClick } disabled={ disabled }>{ type }</button>;

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};
