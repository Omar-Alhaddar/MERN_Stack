
import './App.css';
import { Router,} from "@reach/router"
import Main from './components/Main';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <Details path="products/:id" />
      </Router>
    </div>
  );
}

export default App;
