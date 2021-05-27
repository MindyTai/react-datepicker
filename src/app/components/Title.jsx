import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ year, month }) => {
    return (
        <>
            <div>
                {year}
                {month}
            </div>
        </>
    );
};

Title.propTypes = {
    year: PropTypes.number,
    month: PropTypes.string,
};
