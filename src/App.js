import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Todos from "./containers/todos/todos";

function App(){
    return (
        <Router>
            <Switch>
                <Route path="/" component={Todos}/>
            </Switch>
        </Router>
    );
}

export default App;
