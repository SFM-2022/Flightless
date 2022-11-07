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
      <div>{roundTrip ? 'Round Trip' : 'Oneway'}</div>
      <div>Origin: {depLocation}</div>
      <div>Destination: {arrLocation}</div>
      <div>Departure Date: {departureDate}</div>
      {roundTrip && <div>Return Date: {returnDate}</div>}
      <div>{cabinClass} Class</div>
      <div># of adults: {adults}</div>
      <div># of children: {children}</div>
      <div># of infants: {infants}</div>
    </div>
  );
}
