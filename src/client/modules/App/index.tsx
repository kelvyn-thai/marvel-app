import * as React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch} from "react-router";
import store from 'Redux/store';
import Comics from 'Comics/index';
import ComicDetails from 'Comics/features/comic-details';
import NotFound from 'NotFound/index';
import "bootstrap/dist/css/bootstrap.min.css";
import "Share/scss/reset-css.scss";




export default class App extends React.Component<any, any> {
    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Comics} />
                        <Route path="/comic/:id" component={ComicDetails} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}