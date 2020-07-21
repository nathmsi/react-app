import React, {  } from 'react';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useSelector , useDispatch } from 'react-redux';

import{
    toogle_mode_theme
} from '../../store/actions';


export default function Switches(props) {
    
    const {
        theme
    } = useSelector(state => state.theme);
    const dispatch = useDispatch();


    return (
        <div>
            <FormControlLabel
                value="end"
                control={
                    <Switch
                        checked={theme.palette.type === 'dark'? true : false}
                        onClick={() => dispatch(toogle_mode_theme(theme.palette.type)) }
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                label={props.darkMode}
                labelPlacement="end"
            />
        </div>
    );
}
