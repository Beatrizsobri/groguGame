import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Game } from './components/Game/Game';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Game />
  </BrowserRouter>,
  document.getElementById('root')
);