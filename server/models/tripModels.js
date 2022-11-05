const { Pool } = require('pg');

const PG_URI =
  'postgres://ewwylkvx:I8IIhvZqNkI0SYs9gUIbNxoIftSkcvXL@heffalump.db.elephantsql.com/ewwylkvx';

const pool = new Pool({
  connectionString: PG_URI,
});
// NONE OF THESE FIELDS ARE REQUIRED
// all the numbers are strings
// trip_id INT GENERATED ALWAYS AS IDENTITY,
// dep_location VARCHAR(100),
// arr_location VARCHAR(100),
// dep_date VARCHAR(100),
// return_date VARCHAR(100),
// adults VARCHAR(10),
// children VARCHAR(10),
// infants VARCHAR(10),
// cabin_class VARCHAR(100),
// round_trip BOOLEAN,
// is_favorite BOOLEAN,
// time_created VARCHAR(100),
// user_id VARCHAR(100),
// PRIMARY KEY(trip_id)

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
