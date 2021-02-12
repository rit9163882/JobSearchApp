import logo, { ReactComponent } from './logo.svg';
import './App.css';import React, { Component } from 'react'; 
import ApplicantLogin from './ApplicantLogin';
import RecruiterLogin from'./RecruiterLogin';

// import {Router,Route} from 'react-router';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      PostJob:false,
    }
  }
  postAJob(){
    this.setState(({
      PostJob:true,
    }));
  }
  Apply(){
    this.setState(({
      PostJob:false,
    }));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Find and Create Jobs</h1>
          <h2>Login</h2>
          <div className="studentOrRecruiter">
              <button onClick={ () => this.Apply() }>Apply for Job</button><button onClick={ () => this.postAJob() }>Create a Job</button>
              {!this.state.PostJob?<ApplicantLogin />:null}
              {this.state.PostJob?<RecruiterLogin />:null}
          </div>
        </header>
        
      </div>
    )
  }
  
}

export default App;
