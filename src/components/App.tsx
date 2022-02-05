import React from 'react';
import './App.scss';
import { Menu } from './Menu';
import { Routes, Route, Link } from "react-router-dom";
import { Pieces } from './Pieces/PIeces';
import { Rules } from './Rules/Rules';
import { Game } from './Game/Game';

export enum LinksTo {
  pieces = 'PIECES',
  game = 'GAME', 
  rules = 'RULES'
}


function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" />
        <Route path={LinksTo.pieces} element={<Pieces />} />
        <Route path={LinksTo.rules} element={<Rules />} />
        <Route path={LinksTo.game} element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
