import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { First, Page1 } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Building wealth in your twenties</h1>
        <Switch>
          <Route path="/" exact component={First} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
