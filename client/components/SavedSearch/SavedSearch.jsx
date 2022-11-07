import React from 'react';

export default function SavedSearch({
  depLocation,
  arrLocation,
  departureDate,
  returnDate,
  adults,
  children,
  infants,
  cabinClass,
  roundTrip,
}) {
  return (
    <div className='saved-search'>
      <h3 className='search-results-display'>
        {roundTrip ? 'Round Trip' : 'One Way'}
      </h3>
      <div>
        <span className='bold-text'>Origin: </span>
        {depLocation}
      </div>
      <div>
        <span className='bold-text'>Destination: </span>
        {arrLocation}
      </div>
      <div>
        <span className='bold-text'>Departure Date: </span>
        {departureDate}
      </div>
      {roundTrip && (
        <div>
          <span className='bold-text'>Return Date: </span> {returnDate}
        </div>
      )}
      <div>{cabinClass} Class</div>
      <div>
        <span className='bold-text'># of adults: </span> {adults}
      </div>
      <div>
        <span className='bold-text'># of children: </span> {children}
      </div>
      <div>
        <span className='bold-text'># of infants: </span> {infants}
      </div>
    </div>
  );
}
