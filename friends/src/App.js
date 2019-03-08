import React, { Component } from "react";
import styles from "./App.module.scss";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import FriendsList from "./components/FriendsList/FriendsList.js";
import Protected from "./components/Protected/Protected.js";
import PrivateRoute from "./components/Protected/Protected.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/friends-list">Friends List</Link>
            </li>
          </ul>
          <Route path="/friends-list" component={FriendsList} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
