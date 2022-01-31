import './App.scss';
import grogu from "../Images/grogu.gif";
import { Menu } from '../components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className='content'>
        <img src={grogu} alt="grogu comiendo galletas" />
      </div>

    </div>
  );
}

export default App;
