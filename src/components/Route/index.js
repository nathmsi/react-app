import React from "react";


import { Switch, Route } from 'react-router-dom';

//screens
import Home from '../../screens/HomeScreen';
import LoginUserScreen from '../../screens/LoginUserScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import CandidateDetailScreen from '../../screens/CandidateDetailScreen';

import { Typography } from "@material-ui/core";


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />\
            <Route exact path='/candidate-detail' component={CandidateDetailScreen} />
            <Route exact path='/signIn' component={LoginUserScreen} />
            <Route exact path='/signUp' component={SignUpScreen} />
            <Route component={NotFound} />
        </Switch>
    );
}

const NotFound = () => (
    <div style={{ marginTop: 70 }}>
       <Typography align="center" variant="h4" color="error">
           404 not found ... 
       </Typography>
    </div>
);




export {
    MainRoute
}