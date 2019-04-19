import * as React from 'react'
import * as ReactDOM from "react-dom";
import App from "@app/index";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)