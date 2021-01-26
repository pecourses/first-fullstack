import './App.css';
import Counter from './components/Counter';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Todo from './pages/Todo';
import Superheroes from './pages/Superheroes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/superheroes">Superheroes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/todo" component={Todo} />
        <Route path="/superheroes" component={Superheroes} />
      </Switch>
    </Router>
  );
}

export default App;
