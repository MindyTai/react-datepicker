import React, { useContext } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { DatePickerContext } from '../../App';

export const Years = ({ years, onSelectYear }) => {
  const {
    year,
  } = useContext(DatePickerContext);

  return (
    <div className="flex items-center h-full p-2">
      <div className="flex flex-wrap text-center h-full justify-center">
      { years.map((y) => <button key={ y }
          className={ classNames('mx-1 w-1/5 h-1/5 flex items-center justify-center text-xl rounded-full focus:outline-none',
            { 'bg-red-0 text-white': year === y }) }
          onClick ={ () => onSelectYear(y) }
          >
              { y }
          </button>)
       }
      </div>
    </div>
  );
};

Years.propTypes = {
  years: PropTypes.array,
  onSelectYear: PropTypes.func,
};
