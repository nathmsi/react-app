import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';


// Route
import {
    MainRoute
} from '../components/Route';

import { useSelector } from 'react-redux';

// Context Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const MainScreen = () => {
     
    const {
        theme
    } = useSelector(state => state.theme)

    return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <CssBaseline />
                <Header/>
                <MainRoute />
            </MuiThemeProvider>
    );
}




export default MainScreen;
