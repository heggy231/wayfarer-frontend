import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios';

import Main from './component/Main';
import Landing from './component/LandingPage/Landing';
import SignUpForm from './component/SignupForm/SignupForm'

import LogInForm from './component/LoginForm/LoginForm'
import LogOut from './component/LoginForm/Logout'


//currently working on 


import './Home.css';


class Home extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false,
    user: null
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', 
			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            isLoggedIn: true,
            user: response.data.user
          })
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', { //<-- save token to local storage
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.signedJwt
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Home">

        
        <div >
          <Switch>

{/*------------- Signup Routes----------- */}
            <Route path='/signup'
                render={(props) => {
                  return (
                    <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                  )
                }}
              />
{/*------------- Logout Routes----------- */}
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />

{/*------------- Login Routes----------- */}
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
{/*------------- Landing page Routes----------- */}

 <Route exact
              path='/'
              render={() => {
                return (
                  <Landing isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />

          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
