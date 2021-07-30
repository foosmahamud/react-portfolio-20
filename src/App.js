import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
    <Router>
        <Switch>
          <Route exact path="/" component={Home} >
            <Home/>
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact/>
            </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio/>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
