import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


//redux
import { useDispatch, useSelector } from 'react-redux';
import {
    signIn,
} from '../store/actions';

import {
    useHistory
} from "react-router-dom";



import SingInComponent from '../components/Auth/SignInComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginScreen() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        errorMessage,
        loading,
        token
    } = useSelector(state => state.auth);


    let history = useHistory();


    React.useEffect(() => {
        if (token) {
            console.log('isAuth');
            history.push('/');
        }
    }, [token]);

    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <SingInComponent loginUser={(obj) => dispatch(signIn(obj))} errorMessage={errorMessage} loading={loading} />
            </Grid>
        </div>

    );
}

export default (LoginScreen);