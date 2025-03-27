import Heading from './components/Heading/Heading';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from './components/Loader'
import  Home = lazy(() => import('./pages/Home'));
import  SearchCountry = lazy(() => import('./pages/SearchCountry'));
import Country = lazy(() => import('./pages/Country'));


export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}
      <Routes>
        <Route path="/country" element={<Home />} />
        <Route path="/country/:countryId" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Routes>
      </Suspense>
    </>
  );
};
