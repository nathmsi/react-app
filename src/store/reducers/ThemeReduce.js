
import {
    TOOGLE_DARK_MODE
} from '../actions/types';

const themeDark = {
    palette: {
        primary: {
            main: '#fafafa',
            default: '#fafafa',
        },
        text: {
            primary: '#fafafa',
            secondary: '#fafafa'
        },
        secondary: {
            main: '#424242',
        },
        background: {
            main: '#fff'
        },
        type: "dark"
    }
}

const themeNotDark = {
    palette: {
        primary: {
            main: '#26c4ec',
            default: '#26c4ec',
        },
        secondary: {
            main: '#26c4ec',
        },
        text: {
            primary: '#26c4ec',
            secondary: '#26c4ec'
        },
        background: {
            main: '#fff'
        },
        type: "light"
    }
}


const INITIAL_STATE = {
    theme: themeNotDark,
};



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOOGLE_DARK_MODE:
            return { ...state, theme: action.payload?    { ...themeNotDark } : { ...themeDark }   }
        default:
            return state;
    }
}


