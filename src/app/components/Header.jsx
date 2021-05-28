import React, { useContext } from 'react';

import { CalenderContext } from '../../App';
import { Button } from './Button';
import { Title } from './Title';

export const Header = () => {
  const {
    year, month, dispatch,
  } = useContext(CalenderContext);

  return (
    <div className="flex justify-evenly items-center h-12">
      <Button type={ '<' } handleClick={ () => dispatch({ type: 'GET_PREV_MONTH' }) } />
      <Title year={ year } month={ month } />
      <Button type={ '>' } handleClick={ () => dispatch({ type: 'GET_NEXT_MONTH' }) } />
    </div>
  );
};
