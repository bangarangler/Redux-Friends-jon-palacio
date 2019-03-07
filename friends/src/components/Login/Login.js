import React from "react";

import { connect } from 'react-redux'

import { login } from '../actions/actions.js'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
  e.preventDefault();
  this.setState({
    credentials: {
    ...this.state.credentials,
    [e.target.name]: e.target.value
    }
  })
  }

  login = e => {
  e.preventDefault();
  this.props.login(this.state.credentials).then(() => {
    this.props.history.push('/friends-list')
  })
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Enter UserName" name='username' value={this.state.credentials.username} onChange={this.handleChange} />
        <input type="text" placeholder="Enter Password" name='password' value={this.state.credentials.password} onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default connect(null, { login })(Login);
