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
    <div>
      <div>
        Outbound from: {depAirport} to: {arrAirport}
      </div>
      <div>Departs: {legs[0].departureTime} </div>
      <div>Arrives: {legs[0].arrivalTime}</div>

      <div>Carrier: {legs[0].airlines.join(', ')} </div>
      <div>Layover(s): {legs[0].layovers.join(', ')}</div>
      <div>Total Duration: {legs[0].duration}</div>

      {roundTrip && (
        <div>
          <div>
            Return from: {legs[1].depAirport} to: {legs[1].arrAirport}
          </div>
          <div>Carrier: {legs.airlines.join(', ')} </div>
          <div>Departs: {legs[1].departureTime} </div>
          <div>Arrives: {legs[1].arrivalTime}</div>
        </div>
      )}

      <div>Provider: {provider}</div>
      <div>Total Price: ${price}</div>
      <a href={handoffUrl}>
        <button>Book Now</button>
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
