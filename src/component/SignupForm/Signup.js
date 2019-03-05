import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Enter Email" name="email" onChange={this.props.handleInput}></input>
        <input type="text" placeholder="Enter Password" name="password" onChange={this.props.handleInput}></input>
        <button onClick={this.handleLogin} type="submit" onClick={this.props.handleSignUp}>SignUp</button>
      </div>
    );
  }
}

export default Signup;