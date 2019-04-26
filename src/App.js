import React, { Component } from "react";
import facade from "./apiFacade";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routing/components/Home";
import Persons from "./routing/components/Persons";
import Planets from "./routing/components/Planets";
import Ships from "./routing/components/Ships";
import Navigation from "./routing/components/Navigation";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", role: "" };
  }
  login = evt => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
  onChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange}>
          <input placeholder="Username" id="username" /><br />
          <input placeholder="Password" id="password" /><br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username, role: this.props.role };
  }
  logout = evt => {
    evt.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <p>
            Username logged in: {this.state.username} as role: {this.state.role}
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
  }
}

class Errorz extends Component {
  constructor(props) {
    super(props);
    this.state = { error: props.error };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error });
  }

  render() {
    let error = this.state.error;
    if (!this.state.error) {
      return null;
    }

    return (
      <div>
        <p>
          {" "}
          {error.errorMessage}, {error.statusDescription}
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: "", role: "", error: null };
  }
  logout = () => {
    facade.logout();
    this.setState({
      loggedIn: false,
      username: "",
      role: ""
    });
  };
  login = async (user, pass) => {
    try {
      await facade.login(user, pass);
      this.setState({
        loggedIn: true,
        username: user,
        role: facade.parseJwt(facade.getToken()).roles,
        error: null
      });
    } catch (e) {
      const error = await e.fullError;
      this.setState({ error });
    }
  };

  render() {
    return (
      <div>
        <Errorz error={this.state.error} />
        {!this.state.loggedIn ? (
          <LogIn login={this.login} />
        ) : (
          <LoggedIn
            logout={this.logout}
            username={this.state.username}
            role={this.state.role}
          />
        )}
      </div>
    );
  }
}
export default App;
