import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RainbowApplication from 'react-rainbow-components/components/Application';
import Admin from './pages/Admin';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <RainbowApplication>
                    <Route exact path="/" component={Admin} />
                </RainbowApplication>
            </Router>
        </Provider>
    );
}
