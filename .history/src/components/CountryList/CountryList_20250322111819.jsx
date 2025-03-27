import {Link} from
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';


const CountryList = ({countries}) => {
  return <Grid>
    {countries.map(({ id, country, flag }) => (
      
    ))}
  
</Grid>;
};
export default CountryList;
