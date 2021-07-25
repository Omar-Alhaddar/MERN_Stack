
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import NumWord from './components/NumWord';
import Word from './components/Word';


function App() {
  return (
    <div className="App">
      <Router>

          <Home path= "/home"/>
          <NumWord path="/:id"/>
          <Word path= "/:id/:color/:bgcolor"/>

      </Router>
 
       

    </div>
  );
}

export default App;
