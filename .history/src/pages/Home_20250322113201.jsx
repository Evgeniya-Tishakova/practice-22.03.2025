import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const data = await getCountries();
        console.log('data', data);
        setCountries(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {error && <Heading title="Oops! Something went wrong..." bottom />}
          {countries.length > 0 && <CountryList country={countries} />}
        </Container>
      </Section>
    </>
  );
};
export default Home;
