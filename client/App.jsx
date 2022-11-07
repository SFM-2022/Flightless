import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Modals/Form.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import SavedTrips from './pages/SavedTrips/SavedTrips.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import SavedSearch from './components/SavedSearch/SavedSearch.jsx';

export default function App() {
  const [formData, setFormData] = useState([]);
  const [savedSearches, setSavedSearches] = useState([]);
  const [apiResults, setApiResults] = useState();
  const [formIsOpen, setFormIsOpen] = useState(false);
  useEffect(() => {
    axios
      .get('/api/test')
      // .get('/api/flights')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const updateForm = (info) => {
    setFormData(info);
  };

  const fetchRows = () => {
    axios
      .get('/api/trips')
      .then(({ data }) => {
        setSavedSearches(data);
      })
      .catch((err) => console.log('error in fetchRows', err));
  };
  //create a onsubmit function that when called will call setData and pass in the user inputted values to setData

  // FORM DATA STATE -> set by forms submit handler
  // SEARCH RESULTS -> set by data sent back from backend
  // axios fetch
  // PAST SEARCHES -> set by data sent from backend
  // axios fetch

  /* Form modal 
pass it all of the form data as props
pass it the onSubmit handler
pass it an onChange handler (every input should have this)
each input has <input value={}/>
*/

  return (
    <>
      <Form updateForm={updateForm} />
      <Navbar />
      <div className='search-results'>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={<SearchResults />}
          />
          <Route
            path='/saved-trips'
            element={
              <SavedTrips
                savedSearches={savedSearches}
                fetchRows={fetchRows}
              />
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
      {formData}
    </>
  );
}
