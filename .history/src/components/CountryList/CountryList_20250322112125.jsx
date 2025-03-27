import {Link} from
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';


const CountryList = ({countries}) => {
  return <Grid>
    {countries.map(({ id, country, flag }) => (
      <GridItem  key={id}>
  <Link to={`/country/${id}`}>
    <img src='' alt='' />
  </Link>
</GridItem>
    ))}
  
</Grid>;
};
export default CountryList;
