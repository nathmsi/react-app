
import {
    TOOGLE_DARK_MODE
} from './types'




export const toogle_mode_theme = (type) => {
    return (dispatch) => {
        dispatch({
            type: TOOGLE_DARK_MODE,
            payload: type === 'dark' ? true : false
        })
    }
};
