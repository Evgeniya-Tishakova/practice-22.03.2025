import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  console.log('params', countryId);
  const { country, setCountry } = useState(null);
  const { isLoading, setIsLoading } = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  console.log('country location', location);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default Country;
