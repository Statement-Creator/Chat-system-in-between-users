const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//mongodb nodejs connection
mongoose.connect('mongodb://localhost:27017/socialnetwork')

//middleware
app.use(bodyParser.json());
app.use(cors());

//setting routes
const api = require('./routes/routes');
app.use('/api',api);

//starting server
app.listen(3000,function(){
    console.log('Server started.');
})