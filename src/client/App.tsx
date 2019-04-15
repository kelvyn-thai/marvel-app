import * as React from 'react'
import * as ReactDOM from "react-dom";
import App from "App/index";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Redux/store';
// import * as ReactGA from "react-ga";

// ReactGA.initialize('UA-138258837-1', {
//     debug: true,
// });

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
)