import yelp from '../../api/yelp';


import {
    CANDIDATE_GET_LOADING,
    CANDIDATE_GET_ERROR,
    CANDIDATE_GET_SUCCESS,
    CANDIDATE_SELECTED
} from './types'




export const getCandidates = () => {
    return  async (dispatch) => {
        dispatch({
            type: CANDIDATE_GET_LOADING
        });
        try {
            const path = '/api/candidates';
            const response = await yelp.get(path);
            console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: CANDIDATE_GET_SUCCESS,
                    payload: response.data.candidates
                });
            } else {
                dispatch({
                    type: CANDIDATE_GET_ERROR,
                    payload: response.data.message
                });
            }
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: CANDIDATE_GET_ERROR,
                payload: 'problem to signup'
            });
        }
    }
}

export const selectCandidat = (id) => {
    return  async (dispatch) => {
        dispatch({
            type: CANDIDATE_SELECTED,
            payload: id
        });
    }
}


