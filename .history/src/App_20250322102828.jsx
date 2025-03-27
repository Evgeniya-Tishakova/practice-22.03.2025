import Heading from './components/Heading/Heading';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SearchCountry } from './pages/SearchCountry';

export const App = () => {
  return <Heading title="App" bottom />;
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/country" element={<SearchCountry />} />
  </Routes>;
};
