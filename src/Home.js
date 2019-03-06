import React, { Component } from 'react';
// import Header from './component/Header';
import './Home.css';
import {Route , Link ,Switch} from 'react-router-dom';
import axios from 'axios';
import Main from './component/Main';
import Landing from './component/LandingPage/Landing'
import Signup from './component/SignupForm/Signup';
import Login  from './component/LoginForm/Login';

class Home extends Component {
  state={
    email:'',
    password: '',
    isLoggedIn: false,
    user: null
  }

  componentDidMount(){
    if(localStorage.token){
      
    }

}
 handleInput =(e)=>{
   this.setState({
      [e.target.name]: e.target.value
   })
 }

 handleLogin = (e)=>{
   e.preventDefault()
   axios.post('http://localhost:3001/user/login',{
     email: this.state.email,
     password: this.state.password
   })
   .then(response=>{
     localStorage.token = response.data.signedJwt
     this.setState({
       isLoggedIn : true,
       user: response.data.user
     })
   })

 }
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
