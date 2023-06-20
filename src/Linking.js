import React, { Suspense, lazy,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './commponant/Navbar/Navbar.tsx';
import Footer from './commponant/Footer/Footer.js';

// Import your components using lazy loading
const Home = lazy(() => import('./pages/Home/Home.tsx'));

const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));

const Article = lazy(() => import('./pages/Article/Article.jsx'));

export default function Linking() {
  const [img , setimg] = useState()
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/blog" element={<Blog setimg={setimg}/>} />
          <Route exact path="/article" element={<Article img={img}/>} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}