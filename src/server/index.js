const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.static('dist'));

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: 'Internal Server Error',
        details: err
    })
});


app.get('*', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
        <link rel="icon" href="assets/img/marvel-icon.ico">    
        <title>Marvel App</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="runtime.cb192db615be855f0bf1.js"></script><script type="text/javascript" src="vendors.09d58670a086a438e845.js"></script><script type="text/javascript" src="main.a5b67de606fdc59f2132.js"></script></body>
        </body>
    </html>
    `)
});


app.listen(port, () => console.log('Server start at port ', port));