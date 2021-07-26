import {Router} from '@reach/router';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />

      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
