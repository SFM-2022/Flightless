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

const tripController = {};

tripController.get;
