import * as React from 'react'
import * as ReactDOM from "react-dom";
import App from "App/index";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
)