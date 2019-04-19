import * as React from 'react';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@app/index';
import DotenConfig from '@doten-config';
import store from "@redux/store";
import { actionFetchingComicsMarvel, actionFetchedComicsMarvel, actionFetchFailComicsMarvel } from '@comics/module/actions';
import { LIMIT_PER_PAGE } from '@comics/module/constants';
import ComicsApi from "@comics/module/api";


const app = express();
const port = DotenConfig.PORT;
// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('assets'));

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: 'Internal Server Error',
        details: err
    })
});


app.get('*', async (req, res, next) => {
   console.log('req.url', req.url)
    try {
        store.dispatch(actionFetchingComicsMarvel());
        const limit = LIMIT_PER_PAGE;
        const page = 1;
        const params = {
            limit,
            offset: (page - 1) * limit
        }
        const { data } = await  ComicsApi.apiGetComicsMarvel(params);
        if (data.code === 200) {
            const {
                total,
                results,
            } = data.data;
            const payload = {
                results,
                page,
                limit,
                totalRecords: total,
                totalPages: Math.ceil(total / params.limit)
            }
            store.dispatch(actionFetchedComicsMarvel(payload));
        }
        else {
            store.dispatch(actionFetchFailComicsMarvel());
        }

    } catch (error) {
        store.dispatch(actionFetchFailComicsMarvel());
    }

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    )

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
        <link rel="icon" href="img/marvel-icon.ico">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="build/styles.css" rel="stylesheet"></head>
        <title>Marvel App</title>
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
        /</g,
        '\\u003c'
    )}
        </script>
        <script type="text/javascript" src="build/runtime.js"></script>
        <script type="text/javascript" src="build/vendors.js"></script>
        <script type="text/javascript" src="build/bundle.js"></script>
    </body>
    </html>
    `)
});


app.listen(port, () => console.log('Server start at port ', port));
