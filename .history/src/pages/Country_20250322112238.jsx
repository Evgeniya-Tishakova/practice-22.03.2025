import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useParams } from 'react-router-dom';

const Country = () => {
  const params = useParams();
  console.log('params', params);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default Country;
