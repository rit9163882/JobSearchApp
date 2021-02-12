import reactDom from "react-dom";
import React from 'react';
import { Route, IndexRoute, Router ,Switch} from 'react-router';
import App from './App';
import ApplicantSignUp from './ApplicantSignUp';
import RecruiterSignUp from "./RecruiterSignUp";
import history from './history';
import { Switch } from "react-router";
export default (
    <Router history={history}>
        <Switch>
        <Route path="/" component={App}>
        <Route path="/ApplicantSignUp" component={ApplicantSignUp} />
        <Route path="/RecruiterSignUp" component={RecruiterSignUp} />
        </Route>
        </Switch>
    </Router>
);

