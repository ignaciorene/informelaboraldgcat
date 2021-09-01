import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
