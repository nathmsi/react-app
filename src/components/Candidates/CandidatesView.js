import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Zoom from '@material-ui/core/Zoom';

import {
    useHistory
} from "react-router-dom";

//redux
import { useDispatch } from 'react-redux';
import {
    selectCandidat
} from '../../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: 300,
        flexGrow: 1,
        margin: 0
    },
    rootDialog: {
        // width: props => props.width * (9 / 10),
    },
    img: {
        objectFit: 'contain'
    },
    grow: {
        flexGrow: 1
    },
    titleView: {
        display: 'flex',
        alignItems: 'center'
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
        width: theme.spacing(10),
        height: theme.spacing(10),
        alignSelf: 'center'
    },
}));


function ImgMediaCard(props) {
    const classes = useStyles();

    let history = useHistory();
    const dispatch = useDispatch();


    const {
        candidate
    } = props;

    const handleClick = () =>{
        history.push('/candidate-detail');
        dispatch(selectCandidat(candidate.id));
    }


    return (
        <Zoom in={true}>
            <div className={classes.root}>
                <Card >
                    <CardActionArea onClick={handleClick}>
                        <CardContent>
                            <div className={classes.content}>
                                <Avatar className={classes.avatar} align="center" src={`${candidate.avatar}`} />

                                <div className={classes.subContent}>
                                <Typography variant="h4" align="center">
                                    {candidate.first_name}  
                                </Typography>
                                <Typography variant="h4" align="center">
                                   {candidate.last_name}
                                </Typography>
                                <Typography variant="h6" align="center">
                                    {candidate.job_title}
                                </Typography>
                                </div>
                                
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Zoom>
    );
}




export default (ImgMediaCard);