import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import Details from "./components/Details";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
