import React from 'react';

import logo from '../public/logo.png';
import './style/main.scss'

const App = () => (
  <section>
    <h2 className="text-primary">Welcome to the app!</h2>
    <img src={logo} alt="logo" />
  </section>
);

export default App;
