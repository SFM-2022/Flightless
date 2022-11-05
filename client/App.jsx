import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import SavedTrips from './pages/SavedTrips/SavedTrips.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default function App() {
  const [formData, setFormData] = useState({
    depLocation: '',
    arrLocation: '',
    depDate: '',
    numAdults: 0,
    numChildren: 0,
    numInfants: 0,
    cabinClass: '',
    roundTrip: false,
  });
  useEffect(() => {
    axios
      .get('/api/test')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={<SearchResults />}
          />
          <Route
            path='/saved-trips'
            element={<SavedTrips />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </>
  );
}
