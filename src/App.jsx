import React from 'react';
import { Calender } from './app/components/Calender';

const App = () => (
    <div className="container mx-auto w-full pt-20 flex flex-col items-center">
        <h2 className="text-primary text-2xl font-bold mb-12">
            Welcome to the calender app!
        </h2>
        <Calender />
    </div>
);

export default App;
