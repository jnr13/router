import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { About, User } from "./routes/";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/user/alex">Alex user</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/user/:name">
            <User />
          </Route>
          <Route path="/users">Users</Route>
          <Route exact path="/">
            Home
          </Route>
          <Route path="*">No content 404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
