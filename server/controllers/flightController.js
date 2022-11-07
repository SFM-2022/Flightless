const flightController = {};

// use dummy values for testing if possible so we don't go over the freemium limit
const dummyOnewayTripRes = require('../testingData/onewayTripRes');
const dummyRoundTripRes = require('../testingData/roundTripRes');
const useDummyData = true;

flightController.fetchData = (req, res, next) => {
  if (useDummyData) {
    console.log('flightController.fetchData req.body value: ', req.body);
    const dummyData = req.body.roundTrip
      ? dummyRoundTripRes
      : dummyOnewayTripRes;
    res.locals.flights = dummyData;
    return next();
  } else {
    // TODO: write middleware to format call to API
  }
};

flightController.formatData = (req, res, next) => {
  // return an array of flights
  const formattedData = [];
  /*
  flight object template
  {
    id: STRING, // can use for making React keys
    price: INTEGER, // total price in USD, rounded to nearest dollar
    provider: STRING, // booking website we will redirect to
    handoffUrl: STRING, // url of booking website
    legs: ARRAY, // contains leg objects one leg for oneway, two for round trip
  }

  leg object template
  {
    id: STRING,
    departureTime: STRING,
    arrivalTime: STRING,
    duration: STRING,
    airlines: ARRAY, // elements are names of each airline involved
    stopovers: ARRAY, // elements are names of each stopover airport
  }
  */
};

module.exports = flightController;
