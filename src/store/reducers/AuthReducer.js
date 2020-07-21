
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGIN_OUT
} from '../actions/types'



const INITIAL_STATE = {
   token: '',
   loading: true,
   errorMessage: ''
};



export default ( state = INITIAL_STATE , action ) => {
    //console.log(action);
    switch (action.type){
        case LOGIN_USER:
            return { ...state , loading: true , errorMessage: '' }
        case LOGIN_USER_SUCCESS:
            return { ...state , token: action.payload , errorMessage: '' ,  loading: false }
        case LOGIN_USER_FAIL:
            return { ...state , token: '' , errorMessage: action.payload ,  loading: false }
        case LOGIN_OUT: 
            return { ...state , ...INITIAL_STATE ,  loading: false }
        default : 
            return state;
    }
}