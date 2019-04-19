import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import rootSagas from './sagas';

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
    }
}

let preloadedState={};

if(process.env.BROWSER_SIDE){
    preloadedState = {...window.__PRELOADED_STATE__} ;
    delete window.__PRELOADED_STATE__;
}

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            saga
        )    
    )
)

saga.run(rootSagas);
export default store;