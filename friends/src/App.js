import React, { Component } from "react";
import styles from "./App.module.scss";

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <Router>
      <div className={styles.App}>
        <ul>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
        <Route path='/login' component={Login}/>
      </div>
    </Router>
    );
  }
}

export default App;
