// Step1 :  Create a folder
// Step2 : Move into that folder
// Step3 : npm init -y
// Step4 : open folder using vs code
// Step5 : npm i express
// Step6 : create server.js

// Create your own server

// Server instantiate
const express = require('express');
const app = express();

// used to parse req.body in express ==> used in PUT or POST
const bodyParser = require('body-parser');

// specifically parse JSON data and add it to the request.body Object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(3000, () => {
    console.log('Server started at port no : 3000');
});

// Routes
app.get('/', (req,res)=> {
    res.send('Hello jee , kaise ho saare');
});

app.post('/api/cars',(req,res) => {
    const {name , brand} = req.body;
    console.log(`name ==> ${name}`);
    console.log(name);
    console.log(brand);
    res.send('Car submiteed Succesfully');

});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology : true
})
.then(() => {console.log('Connection Succesful')})
.catch((error) => {console.log(`Received an error : ${error}`)});
