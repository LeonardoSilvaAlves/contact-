import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import New from "./pages/new";
import Home from "./pages/home";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/New">
            <New />
          </Route>
          
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App