import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {
    IconButton,
    Tooltip,
    Container
} from '@material-ui/core';


import {
    useHistory
} from "react-router-dom";


//redux
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: 300,
        flexGrow: 1,
        margin: 0
    },
    grow: {
        flexGrow: 1
    },
    container: {
        margingTop: theme.spacing(5),
        margingBottom: theme.spacing(2),
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    subContent: {
        marginTop: theme.spacing(2)
    },
    avatar: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        alignSelf: 'center'
    },
    title: {
        // margin: theme.spacing(2)
    },
    subTitle: {
        //border: 'solid 2px white',
        //borderRadius: 5,
        margin: theme.spacing(1)
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        border: 'solid 2px ',
        borderRadius: 5,
        margin: theme.spacing(1)
    },
    column: {
        
        border: 'solid 2px ',
        borderRadius: 5,
        margin: theme.spacing(1)
    }
}));


function ImgMediaCard(props) {
    const classes = useStyles();



    const {
        token
    } = useSelector(state => state.auth);

    const {
        selectedCandidate,
        candidates
    } = useSelector(state => state.candidates);

    const candidate = candidates.find(el => el.id === selectedCandidate);


    let history = useHistory();

    React.useEffect(() => {
        if (token === '') {
            history.push('/signIn');
        }
    }, [token]);

    const handleBack = () => {
        history.push('/');
    }

    return (
        <Container maxWidth="lg">
            <div className={classes.content}>

                <div style={{ margin: 5 }}>
                    <Tooltip title={'back'} >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleBack}
                            style={{ textTransform: 'none' }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                </div>

                {
                    candidate ?
                        <div className={classes.root}>
                            <Card  >
                                <CardContent style={{ padding: 0 }}>
                                    <div className={classes.content}>
                                        <Avatar className={classes.avatar} align="center" src={`${candidate.avatar}`} />

                                        <div className={classes.subContent}>

                                            <div className={classes.row}>
                                                <Typography variant="h5" align="left" className={classes.subTitle}>
                                                    First Name
                                                </Typography>
                                                <Typography variant="h5" align="right" className={classes.subTitle} >
                                                    {candidate.first_name}
                                                </Typography>
                                            </div>

                                            <div className={classes.row}>
                                                <Typography variant="h5" align="left" className={classes.subTitle}>
                                                    Last Name
                                            </Typography>
                                                <Typography variant="h5" align="right" className={classes.subTitle}>
                                                    {candidate.last_name}
                                                </Typography>
                                            </div>
                                            <div className={classes.column}>
                                                    <Typography variant="h5" align="left" className={classes.subTitle}>
                                                        Email
                                                    </Typography>
                                                    <Typography variant="h5" align="right" className={classes.subTitle}>
                                                        {candidate.email}
                                                    </Typography>
                                            </div>
                                            <div className={classes.row}>
                                                <Typography variant="h5" align="left" className={classes.subTitle}>
                                                    Job Title
                                            </Typography>
                                                <Typography variant="h5" align="right" className={classes.subTitle}>
                                                    {candidate.job_title}
                                                </Typography>
                                            </div>
                                            <div className={classes.row}>
                                                <Typography variant="h5" align="left" className={classes.subTitle}>
                                                    Gender
                                            </Typography>
                                                <Typography variant="h5" align="right" className={classes.subTitle}>
                                                    {candidate.gender}
                                                </Typography>
                                            </div>
                                            <div className={classes.row}>
                                                <Typography variant="h5" align="left" className={classes.subTitle}>
                                                    Job Description
                                            </Typography>
                                                <Typography variant="h5" align="center" className={classes.subTitle}>
                                                    {candidate.job_description}
                                                </Typography>
                                            </div>
                                        </div>

                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        :
                        <Typography>
                            not found
                    </Typography>
                }
            </div>
        </Container >
    );

}



export default (ImgMediaCard);