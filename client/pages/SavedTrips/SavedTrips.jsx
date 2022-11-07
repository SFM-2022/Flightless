import React, { useEffect } from 'react';
import SavedSearch from '../../components/SavedSearch/SavedSearch.jsx';

export default function SavedTrips({ savedSearches, fetchRows }) {
  useEffect(() => {
    fetchRows();
  }, []); // this will run only once, when this component mounts
  // sort results by time created
  savedSearches.sort((a, b) => a.time_created - b.time_created);
  const searchComponents = savedSearches.map((search) => {
    return (
      <SavedSearch
        key={search.trip_id}
        depLocation={search.dep_location}
        arrLocation={search.arr_location}
        departureDate={search.dep_date}
        returnDate={search.return_date}
        adults={search.adults}
        children={search.children}
        infants={search.infants}
        cabinClass={search.cabin_class}
        roundTrip={search.round_trip}
      />
    );
  });
  return <div className='saved-trips'>{searchComponents}</div>;
}
