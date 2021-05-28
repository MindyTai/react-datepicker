import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

export const Day = ({ day, isSelected, handleClick }) => (
    <button className={ classNames('w-13 h-16', { 'bg-gray-100': isSelected }) } onClick={ handleClick }>
      { day }
    </button>
);

Day.propTypes = {
  day: Proptypes.number,
  isSelected: Proptypes.bool,
  handleClick: Proptypes.func,
};
