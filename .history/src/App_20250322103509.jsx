import Heading from './components/Heading/Heading';

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}
      <Routes>
        <Route path="/country" element={<Home />} />
        <Route path="/country/:countryId" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<SearchCountry />} />
      </Routes>
      </Suspense>
    </div>
  );
};
