const express = require('express');
const path = require('path');
const app = express();
const tripController = require('./controllers/tripController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  return res.status(200).json('Hi this is Jack');
});

// Route returns all trips user has saved
// TODO: add middleware to fetch favorited rows
app.get('/api/trips', (req, res) => {
  return res.status(200).json(res.locals.trips);
});

// Route adds row to trips table
// TODO: add middleware to add row
app.post('/api/trips', tripController.createData, (req, res) => {
  console.log('sending 200 from POST to /api/trips')
  return res.status(200).send();
});

// Route edits row in table
// TODO: add middleware to update row
app.patch('/api/trips', (req, res) => {
  return res.status(200).send();
});

// Route deletes row in table
// TODO: add middleware to delete row
app.delete('/api/trips', (req, res) => {
  return res.status(200).send();
});

// Route fetches data from API and returns to front end
// TODO: add middleware to fetch from API
app.get('/api/flights', (req, res) => {
  return res.status(200).send(res.locals.flights);
});

app.use('*', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log('Error log: ', errorObj.log);
  console.log('Error origin: ', err);
  const errorStatus = errorObj.status || 500;
  return res.status(errorStatus).json(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Listening on port: 3000...`);
});

module.exports = app;
