import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import SkeltonViewCandidate from './SkeltonViewCandidate';


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
    const [arraySkelton,setArray] = React.useState([]);

    const {
        width
    } = useWindowsDimention();

    

    React.useEffect(() => {
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(i);
        }
        setArray(arr);
    }, []);





return (
    <Container maxWidth="lg" className={classes.container} >
        <div >
            <Grid
                container
                spacing={2}
            >
                {arraySkelton.map(candidate => (
                    <Grid item xs={(width < 900 ? (width < 600 ? 12 : 6) : 4)} key={candidate} className={classes.item} >
                        <SkeltonViewCandidate />
                    </Grid>
                ))}
            </Grid>
        </div>
    </Container>
);
}