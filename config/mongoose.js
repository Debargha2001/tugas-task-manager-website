const mongoose = require('mongoose');
 
// connect to the database
mongoose.connect('mongodb://localhost/tasks_list_db');

// acquire the connection(to check if it is successful)
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

// if db is up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});