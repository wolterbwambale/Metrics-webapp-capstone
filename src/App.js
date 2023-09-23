import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DetailsPage from './components/pages/DetailsPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details/:id" element={<DetailsPage />} />
  </Routes>
);

export default App;
