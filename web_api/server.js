const express  = require('express');
const app =express();
const port = 5000;
const nodemon = require('nodemon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const log4js = require('log4js');
const logger = log4js.getLogger();
const router = require('router');
logger.level = 'debug';
var userRoutes = require('./Router/userRoutes');
const ddb = require('./Database/db');
const cors = require('cors');



// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());


// import all routes
app.all('*', userRoutes);
app.use('/api/v1',userRoutes);
app.get('/', (req, res)=>{
    logger.info('index is running');
    res.send('welcome');
})


app.listen(port,  ()=>{
    logger.debug(`server successfully running on ${port}`);
})