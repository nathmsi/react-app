// redux
import { combineReducers, applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

// persist redux store
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// redux saga
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

// middleware
import { interceptorsAxios } from '../../api/yelp'


// reducers
import CandidatesReduce from './CandidatesReduce';
import ThemeReduce from './ThemeReduce';
import AuthReducer from './AuthReducer';

const reducers = combineReducers({
    candidates: CandidatesReduce,
    theme: ThemeReduce,
    auth: AuthReducer
})


const rootPersistConfig = {
    key: 'persist-data',
    storage: storage,
    blacklist: [],
}


const pReducer = persistReducer(rootPersistConfig, reducers);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(pReducer, {}, applyMiddleware(ReduxThunk,interceptorsAxios,sagaMiddleware) );
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(mySaga);

export {
    persistor,
    store
}