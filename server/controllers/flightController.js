const useDummyData = true;

const dotenv = require('dotenv');
dotenv.config();
const { FLIGHTSAPI_KEY } = process.env;
const axios = require('axios');

const flightController = {};
// use dummy values for testing if possible so we don't go over the freemium limit
const dummyOnewayTripRes = require('../testingData/onewayTripRes');
const dummyRoundTripRes = require('../testingData/roundTripRes');

flightController.fetchData = (req, res, next) => {
  if (useDummyData) {
    console.log('fetching dummy data. roundtrip: ', req.body.round_trip);
    const dummyData = req.body.round_trip
      ? dummyRoundTripRes
      : dummyOnewayTripRes;
    res.locals.flights = dummyData;
    return next();
  } else {
    // compose endpoint
    const {
      dep_location,
      arr_location,
      dep_date,
      return_date,
      adults,
      children,
      infants,
      cabin_class,
      round_trip,
    } = req.body;
    let endpoint;
    if (round_trip) {
      endpoint = `https://api.flightapi.io/roundtrip/${FLIGHTSAPI_KEY}/${dep_location}/${arr_location}/${dep_date}/${return_date}/${adults}/${children}/${infants}/${cabin_class}/USD`;
    } else {
      endpoint = `https://api.flightapi.io/onewaytrip/${FLIGHTSAPI_KEY}/${dep_location}/${arr_location}/${dep_date}/${adults}/${children}/${infants}/${cabin_class}/USD`;
    }
    // fetch from API
    console.log('api endpoint', endpoint);
    axios
      .get(endpoint)
      .then((response) => {
        console.log('API data fetched successfully');
        res.locals.flights = response.data;
        return next();
      })
      .catch((err) => next({ log: err }));
  }
};

flightController.parseData = (req, res, next) => {
  const flightData = res.locals.flights;
  const flightList = res.locals.flights.trips;
  console.log('flightData keys', Object.keys(flightData));
  console.log('flightList is array', Array.isArray(flightList));
  console.log('flightList count: ', flightList.length);
  const parsedData = [];
  // parse data to create flight objects
  // push flight objects to parsedData
  // return formattedData (an array of flights)
  /*
  flight object template
  {
    id: STRING, // can use for making React keys
    price: INTEGER, // total price in USD, rounded to nearest dollar
    provider: STRING, // booking website we will redirect to
    handoffUrl: STRING, // url of booking website
    legs: ARRAY, // contains leg objects (one leg for oneway, two for round trip)
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
  // TODO: typerror: flightlist is not iterable

  for (const flight of flightList) {
    const flightId = flight.id;
    const fare = flightData.fares.find((fare) => fare.tripId == flightId);
    const price = fare.price.totalAmount;
    const provider = fare.providerCode;
    const { handoffUrl } = fare;
    const legs = [];
    // flight obj is complete but leg array must be populated
    const flightObj = { flightId, price, provider, handoffUrl, legs };

    // find leg data and populate leg array
    for (const legId of flight.legIds) {
      // rawLeg is all of the leg data from the API. We need to filter some and format some
      const rawLeg = flightData.legs.find((rawLeg) => (rawLeg.id = legId));
      const { departureTime, arrivalTime, duration } = rawLeg;
      // create an array of airlines by mapping the array of airline codes
      const airlines = rawLeg.airlineCodes.map(
        // for each code, find the airline with a matching code
        (code) =>
          // return the name property of the matching airline
          flightData.airlines.find((airline) => airline.code == code).name
      );
      // ditto for airports
      const stopovers = rawLeg.stopoverAirportCodes.map(
        (code) =>
          flightData.airports.find((airport) => airport.code == code).name
      );
      flightObj.legs.push({
        departureTime,
        arrivalTime,
        duration,
        airlines,
        stopovers,
      });
    }
    parsedData.push(flightObj);
  }
  res.locals.flights = parsedData;

  return next();
};

module.exports = flightController;
