const db = require('../models/tripModels');

// INSERT INTO trips (dep_location, arr_location, dep_date, return_date, adults, children, infants, cabin_class, round_trip, is_favorite, time_created)
// VALUES ('MCO', 'JFK', '2022-12-12', '2022-12-25', '1', '0', '0', 'Economy', true, false, '12345')

// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const text =
//     'SELECT species._id, species.name, species.classification, species.average_height, species.average_lifespan, species.language, planets.name AS homeworld FROM species RIGHT OUTER JOIN planets ON species.homeworld_id = planets._id WHERE species._id = $1';
//   const values = [req.query.id];
//   db.query(text, values)
//     .then((dbResults) => {
//       console.log(dbResults.rows);
//       res.locals.species_data = dbResults.rows[0];
//       next();
//     })
//     .catch((err) =>
//       next({
//         log: 'Error in starwarsController.getSpecies',
//         status: 500,
//         message: err,
//       })
//     );
// };

/*
    {
        "dep_location": "MCO",
        "arr_location": "JFK",
        "dep_date": "2022-12-12",
        "return_date": "2022-12-25",
        "adults": "2",
        "children": "0",
        "infants": "0",
        "cabin_class": "Economy",
        "round_trip": true
    }
*/

const tripController = {};

tripController.createData = (req, res, next) => {
  /*
    Sample request body
    {
        "dep_location": "LAX",
        "arr_location": "JFK",
        "dep_date": "2022-12-24",
        "return_date": "2022-12-30",
        "adults": "2",
        "children": "0",
        "infants": "0",
        "cabin_class": "Economy",
        "round_trip": true
    }
    */
  const date = new Date();
  const values = [
    req.body.dep_location,
    req.body.arr_location,
    req.body.dep_date,
    req.body.return_date,
    req.body.adults,
    req.body.children,
    req.body.infants,
    req.body.cabin_class,
    req.body.round_trip,
    date.toString(),
  ];

  const tripData = `INSERT INTO trips (dep_location, arr_location, dep_date, return_date, adults, children, infants, cabin_class, round_trip, time_created) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

  db.query(tripData, values)
    .then((data) => {
      console.log('this is the data from tripController.createData', data);
      next();
    })
    .catch((err) =>
      next({
        log: 'Error in tripController.createData',
        status: 500,
        message: err
      })
    );
};


tripController.fetchData = (req, res, next) => {
  //just need the rows property 
  console.log('this is the req.body data', req.body);
  const tripData = `SELECT * FROM trips`;

  db.query(tripData)
    .then(response => {
      console.log('this is the data from tripController.fetchData', response);
      res.locals.trips = response.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error in tripController.fetchData',
        status: 500,
        message: err
      })
    );
};


module.exports = tripController;
