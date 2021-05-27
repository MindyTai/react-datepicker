import React from 'react';
import { Header } from './Header';
import { DaysOfTheWeek } from './DaysOfTheWeek';

const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const Calender = () => {
    return (
        <div className="border w-80">
            <Header />
            <DaysOfTheWeek data={DAYS_OF_THE_WEEK} />
        </div>
    );
};
