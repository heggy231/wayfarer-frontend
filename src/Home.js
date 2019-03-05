import React, { Component } from 'react';
import Header from './component/Header';
import './Home.css';
import Main from './component/Main';
// Route is used to connect paths to components
// Link is used to create links to Route paths.
// Switch will find the first route to match a given path. Once found, it will stop looking, just like a Javascript switch statement
//  import the routing components  app is wrap router now we can bring in 
//   app.js 
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Landing from './component/LandingPage/Landing';
import Login from './component/LoginForm/Login';
import Signup from './component/SignupForm/Signup';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* Hello world! we are here! */}
        {/* <Header /> */}
        {/* <Main /> */}

        <Switch>
          {/* controller user is going to  */}
          {/* <Route path="/" component={ About } /> */}
          {/* take you back to home page  home page exact keyword both pages will show it will keep going switch
              it keeps matching --exact --- keyword is important!!
          */}
          <Route exact path="/" component={ Landing } />
          <Route exact path="/Login" component={ Login } />
          <Route exact path="/Signup" component={ Signup } />
          <Route exact path="/Main" component={ Main } />
          {/* <Route path="/about" component={ Footer } />
          <Route path="/gallery" component={ CommentForm } />
          <Route path="/about" component={Main} />
          <Route path = "/blog" exact component = {Footer}/> */}
        </Switch>

      </div>
    );
  }
}

export default Home;
