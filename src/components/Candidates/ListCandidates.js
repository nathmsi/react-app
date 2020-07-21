import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import CandidatesView from './CandidatesView';

import useWindowsDimention from '../../hooks/useWindowsDimention';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        marginTop: 20
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));


export default function TitlebarGridList(props) {
    const classes = useStyles();

    const {
        width
    } = useWindowsDimention();

    const {
        candidates
    } = props;



    return (
        <Container maxWidth="lg"  className={classes.container} >
            <div >
                <Grid
                    container
                    spacing={2}
                     >
                    {candidates.map(candidate => (
                        <Grid item xs={ (width < 900 ? (width < 600 ? 12 : 6 ) : 4 ) } key={candidate.id} className={classes.item} >
                            <CandidatesView candidate={candidate} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    );
}