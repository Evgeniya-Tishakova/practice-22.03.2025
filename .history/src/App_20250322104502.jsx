import Header from './components/Heading/Heading';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Routes>
      </Suspense>
    </>
  );
};
