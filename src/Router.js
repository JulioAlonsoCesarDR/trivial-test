import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './component/Start';
import Trivia from './component/Trivia';


const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Start}/>
                <Route exact path="/trivia" component={Trivia}/>
            </Switch>
        </Router>
    )
}

export default RouterApp
