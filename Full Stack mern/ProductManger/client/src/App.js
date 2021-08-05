
import './App.css';
import { Router,} from "@reach/router"
import Main from './components/Main';
import Details from './components/Details';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="products/:id" />
        <Edit path = "products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
