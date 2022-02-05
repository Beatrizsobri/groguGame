import './App.scss';
import grogu from "../Images/grogu.gif";
import { Menu } from '../components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import { GameRules } from '../components/GameRules/GameRules';
import { Pieces } from '../components/Fichas/Pieces';
import { Game } from '../components/Game/Game';

function App() {
  return (
    <>
    <div className="App">
      <Menu/>
      <div className='content'>
        <img src={grogu} alt="grogu comiendo galletas" />
      </div>

    </div>

    <Routes>
        <Route path="rules" element={<GameRules />} />
        <Route path="pieces" element={<Pieces />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
