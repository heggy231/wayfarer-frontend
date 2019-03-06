import React,{Component} from 'react';
import './Landing.css';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom'
import Login from '../LoginForm/Login';
import SignUp from '../SignupForm/Signup';

//  import the routing components  app is wrap router now we can bring in 
//   app.js 
// Route is used to connect paths to components
// Link is used to create links to Route paths.
// Switch will find the first route to match a given path. Once found, it will stop looking, just like a Javascript switch statement
//  import the routing components  app is wrap router now we can bring in 
//   app.js 
class Landing extends Component{
    render(){
        return(
            <div className="main">
              <div id="home">
                <div id="landing-page-flex">
                    <div className="top-level-wrapper-flex">
                        <div id="top-level">
                            <h1>Wayfarer</h1>
                        </div>
                        <div id="subHeader">
                            <h2>Visit places and Post your experiences</h2>
                        </div>
                        {/* <div className="bouncy arrow-point-down"> */}
                            {/* <a className="fas fa-angle-double-down" href="#project"></a> */}
                            {/* effect I was going for:  https://heggy231.github.io/Heggy-portfolio/#project */}
                            <Link to="/Login"><button>Login</button></Link>
                            <Link to="/Signup"><button>Signup</button></Link>
                            
                        {/* </div> */}
                    </div>
                </div>
              </div> 
            </div>
        );
    }
}

export default Landing;