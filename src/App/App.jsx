import './App.scss';
import grogu from "../Images/grogu.gif";

function App() {
  return (
    <div className="App">
      <nav className='menu'>
        <button>Reglas del juego</button>
        <button>Fichas</button>
        <button>Juego</button>
      </nav>
      <div>
        <img src={grogu} alt="grogu eating" />
      </div>

    </div>
  );
}

export default App;
