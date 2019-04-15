const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
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


app.get('*', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
        <link rel="icon" href="img/marvel-icon.ico">    
        <title>Marvel App</title>
    </head>
    <body>
        <div id="root"></div>
        <!-- Google Analytics -->
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-138258837-1', 'auto');
        ga('send', 'pageview');
        </script>
<!-- End Google Analytics -->
        <script type="text/javascript" src="build/runtime.js"></script><script type="text/javascript" src="build/vendors.js"></script><script type="text/javascript" src="build/main.js"></script></body>
        </body>
    </html>
    `)
});


app.listen(port, () => console.log('Server start at port ', port));