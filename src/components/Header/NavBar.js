import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Context as ContextNavigation } from '../../contexts/navigationContext';
import useWindowDimensions from "../../hooks/useWindowsDimention";
import { useLocation, useHistory } from 'react-router-dom'
import SelectDarkMode from './SelectDarkMode';
import {
    IconButton,
    Button,
    Tooltip,
} from '@material-ui/core';

import { useSelector , useDispatch } from 'react-redux';

import{
    signOut
} from '../../store/actions';

import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: 8
    },
    input: {
        backgroundColor: theme.palette.background.default,
        width: 140,
    },
    inputStyle: {
        display: props => props.width < 600 ? 'none' : 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'nowrap',
        borderRadius: 8,
        backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing(2),
    },
    iconButton: {
        marginLeft: 5,
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
        color: theme.palette.secondary.main,
    },
    iconSunny: {
        color: '#fcd21c'
    }
}));

function NavBar() {
    const history = useHistory();
    const location = useLocation();

    const {
        width
    } = useWindowDimensions();
    const classes = useStyles({ width });

    const {
        setOpen,
    } = React.useContext(ContextNavigation);

    const {
        token
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();




    const handleTitleClicked = () => {
        if (location.pathname !== '/') {
            history.push('/');
        }
    }

    const handleSelect = () => {
        if (token) {
            dispatch(signOut());
        }else{
            history.push('/signin');
        }
    }

    


    return (
        <div className={classes.grow}>
            <AppBar
                position="static" color="secondary"
            >
                <Toolbar variant="dense" color="secondary">


                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Button onClick={handleTitleClicked} style={{ textTransform: 'none' }} color="inherit"  >
                        <Typography className={classes.title} align="center" color="inherit" >
                            {"Home"}
                        </Typography>
                    </Button>



                    <div className={classes.grow} />


                    <SelectDarkMode />


                    <Tooltip title={token === '' ? 'sign in' : 'sign out'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleSelect}
                            style={{ textTransform: 'none' }}
                        >
                            {
                                token === '' ?
                                    <PersonIcon /> :
                                    <ExitToAppIcon />
                            }
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default (NavBar);