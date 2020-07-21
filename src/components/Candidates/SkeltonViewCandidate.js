import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


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


function ImgMediaCard() {
    const classes = useStyles();



    return (
            <div className={classes.root}>
                <Card >
                    <CardActionArea >
                        <CardContent>
                            <div className={classes.content}>
                                <Skeleton variant="circle" className={classes.avatar} align="center" />
                                <div className={classes.subContent}>
                                    <Typography variant="h4" align="center">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="h4" align="center">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="h6" align="center">
                                        <Skeleton />
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
    );
}




export default (ImgMediaCard);