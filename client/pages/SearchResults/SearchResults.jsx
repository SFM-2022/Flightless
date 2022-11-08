import React from 'react';
import SearchResult from '../../components/SearchResult/SearchResult.jsx';

export default function SearchResults({ apiResults }) {
  const searchResultArr = apiResults.map((result) => {
    return (
      <SearchResult
        key={result.flightId}
        price={result.price}
        provider={result.provider}
        handoffUrl={result.handoffUrl}
        legs={result.legs}
      />
    );
  });
  return (
    <div className='prev-search-results'>
      . &nbsp;&nbsp; . &nbsp;&nbsp; . &nbsp;&nbsp; . &nbsp;&nbsp; . &nbsp;&nbsp;
      . &nbsp;&nbsp; ✈️
      <div className='search-result-list'>{searchResultArr}</div>
    </div>
  );
}
