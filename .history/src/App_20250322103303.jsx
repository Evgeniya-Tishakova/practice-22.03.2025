import Heading from './components/Heading/Heading';

export const App = () => {
  return (
    <div>
      <Header />;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Se />} />
      </Routes>
    </div>
  );
};
