import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { RulesPage } from "./RulesPage/RulesPage";
import { GamePage } from "./GamePage/GamePage";
import { PiecesPage } from "./PiecesPage/PiecesPage";
import { Menu } from "./Menu/Menu";

export enum LinksTo {
  pieces = "pieces",
  game = "game", 
  rules = "rules"
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
