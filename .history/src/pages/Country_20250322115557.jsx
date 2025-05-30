import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useParams } from 'react-router-dom';

const Country = () => {
  const { countryId } = useParams();
  const { isLoading, setIsLoading } = useState(false);
  const [error, setError] = useState(false);

  console.log('params', countryId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        

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
