import './App.css';
import RecruiterSignUp from './RecruiterSignUp';
import React from 'react';
class RecruiterLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SignUp:false,
        }
    }
    SignIn(){
        this.state.SignUp=true
    }
    render(){
        return (
            <div className="RecruiterLogin">
              <form>
                  <label>Recruiter's Email: <input type="email" name="email"/></label><br/>
                  <label>Recruiter's Password: <input type="password" name="password"/></label><br/>
                  <input type="submit" value="Login"/>
                  
              </form>
              <button onClick={()=>{this.SignIn()}}>Recruiter's Sign Up</button>
                      {this.state.SignUp?<RecruiterSignUp/>:null}
            </div>
          )
    }

}

export default RecruiterLogin;