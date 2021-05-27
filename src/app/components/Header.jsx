import React from 'react';

import { Button } from './Button';
import { Title } from './Title';

export const Header = () => {
    return (
        <div className="flex justify-evenly">
            <Button type={'<'} />
            <Title year="2020" month={'May'} />
            <Button type={'>'} />
        </div>
    );
};
