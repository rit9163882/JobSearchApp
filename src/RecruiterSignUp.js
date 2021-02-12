import './App.css';
import React from 'react'; 
class RecruiterSignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Email:"",
            Password:"",
            
        }
    }
    render(){
        return (
            <div>
              <form>
                  <label>Recruiter's Name: <input type="email" value={this.state.Name} name="email" placeholder="Enter Name"/></label><br/>
                  <label>Recruiter's Email: <input type="email" value={this.state.Email} name="email" placeholder="Enter Email"/></label><br/>
                  <label>Recruiter's Password: <input type="password" value={this.state.Password} name="password" placeholder="Enter Password"/></label><br/>
                  <input type="submit" value="SignIn"/>
              </form>
            </div>
          )
    }
  
}

export default RecruiterSignUp;