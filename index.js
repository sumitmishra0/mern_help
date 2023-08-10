const express = require('express');

const app = express();

// load config from env
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middleware to parse json body
app.use(express.json());

// import routes for TODO Api
const todoRoutes = require('./routes/todos');

// mount the TODO Api routes
app.use('/api/v1',todoRoutes);

// start server

app.listen(PORT,() => {
    console.log(`Server started succesfully at ${PORT}`);
});

// connect to the Database
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get('/', (req,res) => {
    res.send('<h1>This is Home Page<h1>');
});