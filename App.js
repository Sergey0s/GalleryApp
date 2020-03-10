import React from 'react';
import {createAppContainer} from "react-navigation";
import StackNavigator from "./navigation/StackNavigator";
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from './store/reducers/rootReducer';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const AppContainer = createAppContainer(StackNavigator);
const store = createStore(rootReducer,applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
}

