import './App.css';
import React from 'react';
import ApplicantSignUp from './ApplicantSignUp';
// import routes from '.routes.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'; 
class ApplicantLogin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            SignUp:false,
        }
    }
    render(){
        return (
            <Router>
            <div className="ApplicantLogin">
              <form>
                  <label>Applicant's Email: <input type="email" name="email"/></label><br/>
                  <label>Applicant's Password: <input type="password" name="password"/></label><br/>
                  <input type="submit" value="login"/>
              </form>
              
              {/* {this.state.SignUp?</Link>:null} */}
            </div>
            <Link to="/ApplicantSignUp"><button >Applicant's Sign Up</button></Link>
            <Switch>
            <Route path='/ApplicantSignUp' component={ApplicantSignUp}></Route>
            </Switch>
            </Router>
          )
    }
  
}

export default ApplicantLogin;
