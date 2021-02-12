import './App.css';
import React from 'react'; 
class ApplicantSignUp extends React.Component {
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
                  <label>Applicant's Name: <input type="email" name="Name" placeholder="Enter Name"/></label><br/>
                  <label>Applicant's Email: <input type="email" name="Email" placeholder="Enter Email"/></label><br/>
                  <label>Applicant's Password: <input type="password" name="Password" placeholder="Enter Password"/></label><br/>
                  <input type="submit" value="SignIn"/>
              </form>
            </div>
          )
    }
  
}

export default ApplicantSignUp;