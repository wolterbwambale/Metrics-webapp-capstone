import { Route, Routes, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink('/home');
  }, []);

  return (
    <>
      <nav>
        <ul>
          <NavLink
            to="/home"
            onClick={() => setActiveLink('/home')}
            className={activeLink === '/home' ? 'active' : ''}
          >
            Home
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
