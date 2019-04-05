import * as React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import store from 'Redux/store';
import Home from 'Home/index';
import NotFound from 'NotFound/index';
import "bootstrap/dist/css/bootstrap.min.css";
import "Share/scss/reset-css.scss";


export default class App extends React.Component<any, any> {
    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}