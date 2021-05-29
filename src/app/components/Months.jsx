import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CalenderContext } from '../../App';

export const Months = ({ months, onSelectMonth }) => {
  const {
    month: currentMonth,
  } = useContext(CalenderContext);

  return (
    <div className="flex items-center h-full p-2">
      <div className="flex flex-wrap text-center h-full justify-center">
        { months.map((month, idx) => <button key={ month }
            className={ classNames('mx-1 w-1/5 h-1/5 flex items-center justify-center text-xl rounded-full focus:outline-none',
              { 'bg-red-400 text-white': month === months[currentMonth] }) }
            onClick={ () => onSelectMonth(idx) }
            >
                { month }
            </button>)
         }
      </div>
    </div>
  );
};

Months.propTypes = {
  months: PropTypes.array,
  onSelectMonth: PropTypes.func,
};
