import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav>
      <h1>Sidebar</h1>
      <NavLink to='/'>Search Results</NavLink>
      <NavLink to='/saved-trips'>Saved Trips</NavLink>
    </nav>
  );
}
