import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav>
      {/* <h1>Sidebar</h1> */}
      <ul>
        <li>
          <NavLink to='/'>Search Results </NavLink>
        </li>
        <li>
          <NavLink to='/saved-trips'>Saved Trips</NavLink>
        </li>
      </ul>
    </nav>
  );
}
