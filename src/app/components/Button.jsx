import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type }) => {
    return <button className="w-full">{type}</button>;
};

Button.propTypes = {
    type: PropTypes.string,
};
