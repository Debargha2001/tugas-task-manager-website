const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;

// use express router
const db = require('./config/mongoose');
const Task = require('./models/task');

// middleware to parse incoming encodedd requests
app.use(express.urlencoded());


app.use(cookieParser());
// use static files
app.use(express.static('assets'));

app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);
// set up ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



// use express routers
app.use('/',require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})