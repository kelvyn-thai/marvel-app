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
        <title>Vexere</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `)
});


app.listen(port, () => console.log('Server start at port ', port));