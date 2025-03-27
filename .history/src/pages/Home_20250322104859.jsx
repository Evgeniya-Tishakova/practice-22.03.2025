import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const Home = () => {
  const [country, setCountries] = useState;

  useEffect(() => {
    async function getCountry() {
      try {
      } catch {
      } finally {
      }
    }
    getCountry();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
