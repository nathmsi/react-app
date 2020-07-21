import React from "react";
import ReactDOM from "react-dom";


// main app
import Main from './screens/MainScreen'

// redux
import { Provider as ReduxProvider } from 'react-redux'

// persist redux store
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/reducers';

// router
import {
    BrowserRouter as Router,
} from 'react-router-dom';


// ProviderNavigation
import { Provider as ProviderNavigation } from './contexts/navigationContext';



const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <ProviderNavigation>
                        <Main />
                    </ProviderNavigation>
                </Router>
            </PersistGate>
        </ReduxProvider>
    )
};

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
