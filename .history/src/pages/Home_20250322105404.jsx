import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';

const Home = () => {
  const [country, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCountry() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getCountries();
        console.log(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCountry();
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Heading title="Home" bottom />
        </Container>
      </Section>
    </>
  );
};
export default Home;
