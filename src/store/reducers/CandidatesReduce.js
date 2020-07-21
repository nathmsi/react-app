
import {
    CANDIDATE_GET_LOADING,
    CANDIDATE_GET_ERROR,
    CANDIDATE_GET_SUCCESS,
    CANDIDATE_SELECTED
} from '../actions/types';


const INITIAL_STATE = {
    candidates: [],
    loading: true,
    errorMessage: '',
    selectedCandidate: null
};



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CANDIDATE_GET_LOADING:
            return { ...state, errorMessage: '', loading: true, candidates: [] }
        case CANDIDATE_GET_SUCCESS:
            return { ...state, errorMessage: '', loading: false, candidates: action.payload }
        case CANDIDATE_SELECTED:
            return { ...state, selectedCandidate: action.payload }
        case CANDIDATE_GET_ERROR:
            return { ...state, errorMessage: action.payload, loading: false, candidates: [] }
        default:
            return state;
    }
}





