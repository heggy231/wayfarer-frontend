import React,{Component} from 'react'
import {Route , Link ,Switch} from 'react-router-dom'
import Signup from '../LoginForm/Login';
import Login from '../SignupForm/Signup';
import './Landing.css'

class Landing extends Component{
    render(){
        return(
            <div className="main">
            <div id="subHeader">
                            <h2>Visit places and Post your experiences</h2>
                        </div>
                           <Link to="/Login"><button>Login</button></Link> 
                           <Link to="/Signup"> <button>SignUp</button></Link> 
                    </div>
             
        );
    }
}

export default Landing;