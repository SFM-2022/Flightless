const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res)=> {
    return res.status(200).json('Hi this is Jack');
})

app.use('*', (req, res) => {
    return res.sendStatus(404);
})


app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error occured'}
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log('Error log: ', errorObj.log);
    console.log('Error origin: ', err);
    const errorStatus = errorObj.status || 500;
    return res.status(errorStatus).json(errorObj.message);
})


app.listen(3000, () => {console.log(`Listening on port: 3000...`)})

module.exports = app;
