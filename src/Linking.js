import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponant/Navbar/Navbar.tsx';

// Import your components using lazy loading
const Home = lazy(() => import('./pages/Home/Home.tsx'));

export default function Linking() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}