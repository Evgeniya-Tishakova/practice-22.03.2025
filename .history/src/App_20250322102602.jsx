import Heading from './components/Heading/Heading';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return <Heading title="App" bottom />;
  <Routes>
    <Route path="/" element={<Home/>} />

    <Route path="/country" element={</>}/>

  </Routes>
};
