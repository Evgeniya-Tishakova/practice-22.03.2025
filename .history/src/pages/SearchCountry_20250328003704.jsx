import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import CountryList from '../components/CountryList/CountryList';
import { fetchByRegion } from '../service/countryApi';
import SearchForm from '../components/SearchForm/SearchForm';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  useEffect(() => {
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const handleSubmit = value => {
    setSearchParams({ region: value });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading title="SearchCountry" bottom />}
        {countries.length > 0 && <CountryList />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
