import React, { useContext } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { CalenderContext } from '../../App';

export const Years = () => {
  const { year, yearCount } = useContext(CalenderContext);
  const currentYears = () => _.range(year - 12 * yearCount + 1, year - 12 * (yearCount - 1) + 1, 1);

  return (
    <div className="flex items-center h-full p-2">
    <div className="flex flex-wrap text-center h-full justify-center">
      { currentYears().map((y) => <button key={ y }
          className={ classNames('mx-1 w-1/5 h-1/5 flex items-center justify-center text-xl rounded-full focus:outline-none') }
          >
              { y }
          </button>)
       }
    </div>
  </div>

  );
};
