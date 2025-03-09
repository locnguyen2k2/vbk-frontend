import './assets/styles/app.scss';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  );
}
