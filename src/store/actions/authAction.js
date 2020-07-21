import yelp from '../../api/yelp';

import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGIN_OUT
} from './types'




export const signUp = ({ email, password, username }) => {
    return  async (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        try {
            const path = '/api/auth/signup';
            const response = await yelp.post(path,{
                email, password, username
            });
            console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: response.data.token
                });
            } else {
                dispatch({
                    type: LOGIN_USER_FAIL,
                    payload: response.data.message
                });
            }
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: 'problem to signup'
            });
        }
    }
}


export const signIn = ({ email, password }) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        try {
            const path = '/api/auth/signin';
            const response = await yelp.post(path,{
                email, password
            });
            console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: response.data.token
                });
            } else {
                dispatch({
                    type: LOGIN_USER_FAIL,
                    payload: response.data.message
                });
            }
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: 'problem to signup'
            });
        }
    }
}



export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_OUT
        });
    }
}


