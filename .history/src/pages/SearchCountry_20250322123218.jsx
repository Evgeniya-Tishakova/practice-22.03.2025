import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const SearchCountry = () => {
  const handleSubmit = value => {
    console.log('value', value);
  };

  return (
    <Section>
      <Container>
        <SearchForm />
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default SearchCountry;
