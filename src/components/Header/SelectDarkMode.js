import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core';



import { useSelector , useDispatch } from 'react-redux';

import{
    toogle_mode_theme
} from '../../store/actions';


export default function Switches() {
  

    const {
        theme
    } = useSelector(state => state.theme);
    const dispatch = useDispatch();


    return (
        <div>
            <Tooltip title={theme.palette.type === 'dark'? 'ligth mode' : 'dark mode'}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(toogle_mode_theme(theme.palette.type)) }
                    style={{ textTransform: 'none' }}
                >
                    {
                        theme.palette.type === 'dark' ?
                            <Brightness4Icon /> :
                            <Brightness4OutlinedIcon />
                    }
                </IconButton>
            </Tooltip>

        </div>
    );
}
