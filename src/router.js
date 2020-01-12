import React from "react";
import Rendercheckbox from './components/renderCheckbox'
import Home from './App' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/selection">
            <Rendercheckbox />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
