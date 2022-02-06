import './App.scss';
import { Routes, Route } from "react-router-dom";
import { RulesPage } from './Rules/RulesPage';
import { GamePage } from './Game/GamePage';
import { PiecesPage } from './Pieces/PiecesPage';
import { Menu } from './Menu/Menu';

export enum LinksTo {
  pieces = 'pieces',
  game = 'game', 
  rules = 'rules'
}


function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path={LinksTo.pieces} element={<PiecesPage />} />
        <Route path={LinksTo.rules} element={<RulesPage />} />
        <Route path={LinksTo.game} element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
