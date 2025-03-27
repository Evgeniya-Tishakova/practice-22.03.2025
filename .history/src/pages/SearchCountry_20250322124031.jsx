import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const region = searchParams.get('region');

  const handleSubmit = value => {
    setSearchParams({ region: value });
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
