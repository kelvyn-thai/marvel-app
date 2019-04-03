import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import rootSagas from './sagas';

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            saga
        )    
    )
)

saga.run(rootSagas);
export default store;