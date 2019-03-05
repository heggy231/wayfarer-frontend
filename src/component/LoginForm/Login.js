import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Enter Email" name="email" onChange={this.props.handleInput}></input>
        <input type="text" placeholder="Enter Password" name="password" onChange={this.props.handleInput}></input>
        <button onClick={this.props.handleLogin} type="submit">Login</button>
      </div>
    );
  }
}

export default Login;