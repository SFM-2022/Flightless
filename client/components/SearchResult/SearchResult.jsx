import React from 'react';

export default function SearchResult({
  price,
  provider,
  handoffUrl,
  legs,
  depAirport,
  arrAirport,
}) {
  const roundTrip = legs.length === 2;

  return (
    <div className='total-legs-component'>
      <div>
        <span className='bold-text'>Outbound from: </span> {depAirport} to:{' '}
        {arrAirport}
      </div>
      <div>
        <span className='bold-text'>Departs: </span> {legs[0].departureTime}
      </div>
      <div>
        {' '}
        <span className='bold-text'>Arrives: </span>
        {legs[0].arrivalTime}
      </div>

      <div>
        <span className='bold-text'>Carrier: </span>
        {legs[0].airlines.join(', ')}{' '}
      </div>
      <div>
        <span className='bold-text'>Layover(s): </span>
        {legs[0].layovers.join(', ')}
      </div>
      <div>
        <span className='bold-text'>Total Duration: </span>
        {legs[0].duration}
      </div>

      {roundTrip && (
        <div className='round-trip-legs-results'>
          <div>
            Return from: {legs[1].depAirport} to: {legs[1].arrAirport}
          </div>
          <div>Carrier: {legs.airlines.join(', ')} </div>
          <div>Departs: {legs[1].departureTime} </div>
          <div>Arrives: {legs[1].arrivalTime}</div>
        </div>
      )}

      <div>
        {' '}
        <span className='bold-text'>Provider: </span>
        {provider}
      </div>
      <div>
        {' '}
        <span className='bold-text'>Total Price: </span>${price}
      </div>
      <a href={handoffUrl} target='blank'>
        <button className='book-now'>Book Now</button>
      </a>
    </div>
  );
}

/*
"legs": [
            {
                "departureTime": "12:02",
                "arrivalTime": "20:54",
                "duration": "06h 52m",
                "airlines": [
                    "United Airlines"
                ],
                "depAirport": "Los Angeles International Airport",
                "arrAirport": "Chicago O'Hare International Airport",
                "layovers": [
                    "Houston George Bush Intercontinental Airport"
                ]
*/
