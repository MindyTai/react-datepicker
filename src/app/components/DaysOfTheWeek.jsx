import React from 'react';
import PropTypes from 'prop-types';

export const DaysOfTheWeek = ({ data }) => {
    return (
        <div className="border w-full flex justify-evenly">
            {data.map((day) => (
                <strong key={day}>{day}</strong>
            ))}
        </div>
    );
};

DaysOfTheWeek.propTypes = {
    data: PropTypes.array,
};
