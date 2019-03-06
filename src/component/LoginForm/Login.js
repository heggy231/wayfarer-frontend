import React,{Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div>
                <h2>Login</h2>
               Email : <input type="text"  name='email' onChange={this.props.handleInput} placeholder="Email"/> 
               Password :  <input type="password" name='password'  onChange={this.props.handleInput} placeholder="Password"/> 
               <button  type="submit" onClick={this.props.handleLogIn}> Login </button>
            </div>
        )
    }

}

export default Login;