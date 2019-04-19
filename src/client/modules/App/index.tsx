import * as React from 'react';
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Comics from '@comics/index';
import ComicDetails from '@comics/features/comic-details';
import NotFound from '@not-found/index';
import "@share/scss/reset-css.scss";





export default class App extends React.Component<any, any> {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Comics} />
                <Route path="/comic/:id" component={ComicDetails} />
                <Route path="/*" component={NotFound} />
            </Switch>
        )
    }
}