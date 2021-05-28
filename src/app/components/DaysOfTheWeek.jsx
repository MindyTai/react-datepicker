import React from 'react';
import PropTypes from 'prop-types';

export const DaysOfTheWeek = ({ days }) => (
        <div className="border w-full flex justify-evenly">
            { days.map((day) => (
                <div key={ day } className="w-13.5 text-center">{ day }</div>
            )) }
        </div>
);

DaysOfTheWeek.propTypes = {
  days: PropTypes.array,
};
