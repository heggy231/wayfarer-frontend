import React, { Component } from 'react';
// import Header from './component/Header';
import './Home.css';
import {Route , Link ,Switch} from 'react-router-dom';
import Main from './component/Main';
import Landing from './component/LandingPage/Landing'
import Signup from './component/SignupForm/Signup';
import Login  from './component/LoginForm/Login';
class Home extends Component {
  render() {
    return (
      <div>
<Switch>
  <Route  exact path="/" component={Landing} />
  <Route  path="/Login" component={Login} />
  <Route  path="/Signup" component={Signup} />
  <Route  path="/Main" component={Main} />
</Switch>

      </div>
      // <div className="Home">
      //   Hello world! we are here!
      //   <Header />
      //   <Main />  what we had on the homepage
      // </div>
    );
  }
}

export default Home;
