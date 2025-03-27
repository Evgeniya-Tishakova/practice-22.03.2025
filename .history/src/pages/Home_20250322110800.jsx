import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [country, setCountries] = useState([]);
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
          <Heading title="Home" bottom />
          <CountryList country={country} />
          {isLoading && <b>Loading</b>}
          {error && <b>Sorry there was an error...</b>}
        </Container>
      </Section>
    </>
  );
};
export default Home;
