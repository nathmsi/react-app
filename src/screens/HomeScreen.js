import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ListCandidates from '../components/Candidates/ListCandidates';
import SkeltonListCandidate from '../components/Candidates/SkeltonListCandidate';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
    getCandidates
} from '../store/actions';

import {
    useHistory
} from "react-router-dom";
import { LinearProgress } from '@material-ui/core';





const useStyles = makeStyles(() => ({

}));

function LoginScreen() {
    const classes = useStyles();

    const dispatch = useDispatch();


    const {
        token
    } = useSelector(state => state.auth);

    const {
        errorMessage,
        candidates,
        loading
    } = useSelector(state => state.candidates);


    let history = useHistory();

    React.useEffect(() => {
        if (token === '') {
            history.push('/signIn');
        } else {
            dispatch(getCandidates());
        }
    }, [token]);


    return (
        <>
            { loading && <LinearProgress /> }
            <Typography color="error" align="center" className={classes.text}>
                {errorMessage}
            </Typography>
            {
                candidates.length > 0 ?
                    <ListCandidates candidates={candidates} />
                    : 
                    <SkeltonListCandidate candidates={candidates} />
            }
        </>
    );
}

export default (LoginScreen);