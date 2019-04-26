import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Persons from "./components/Persons";
import Planets from "./components/Planets";
import Ships from "./components/Ships";
import Navigation from "./components/Navigation";

class Routing {
  routeMenu = (username, role) => {
    return (
      <BrowserRouter>
        <div>
          <p>
            Username logged in: {username} as {role}
          </p>
          <button onClick={this.logout}>Logout</button>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/persons" component={Persons} />
            <Route path="/planets" component={Planets} />
            <Route path="/ships" component={Ships} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

const routing = new Routing();
export default routing;
