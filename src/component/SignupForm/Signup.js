import React,{Component} from 'react';

class SignUp extends Component{
    render(){
        return(
            <div>
                <h1> SignUp</h1>
               Email : <input type="text"  onChange={this.props.handle} placeholder="Email"/> 
               Password :  <input type="password"  onChange={this.props.handle} placeholder="Password"/> 
               <button type="submit" onClick={this.handleLogin}> Login </button>
            </div>
        )
    }
}


export default SignUp