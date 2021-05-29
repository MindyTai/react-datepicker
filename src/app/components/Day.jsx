import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

export const Day = ({
  day, isSelected, handleClick, isCurrentMonth,
}) => (
    <button
      className={ classNames('w-13 h-13 focus:outline-none rounded-full',
        { 'bg-red-400 text-white': isSelected && isCurrentMonth }, { 'text-gray-400': !isCurrentMonth }) }
      onClick={ handleClick }
      disabled={ !isCurrentMonth }>
      { day }
    </button>
);

Day.propTypes = {
  day: Proptypes.number,
  isSelected: Proptypes.bool,
  handleClick: Proptypes.func,
  isCurrentMonth: Proptypes.bool,
};
