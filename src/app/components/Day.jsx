import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

export const Day = ({ day, isSelected, handleClick }) => (
    <button className={ classNames('w-13 h-13 focus:outline-none rounded-full', { 'bg-red-400 text-white': isSelected }) } onClick={ handleClick }>
      { day }
    </button>
);

Day.propTypes = {
  day: Proptypes.number,
  isSelected: Proptypes.bool,
  handleClick: Proptypes.func,
};
