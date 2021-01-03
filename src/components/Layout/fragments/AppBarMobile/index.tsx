import { Link } from 'gatsby';
import type { SxProps } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Text from '@mui/material/Typography';
import config from 'config';
import { AppBarStyled } from './styles';

interface Props {
   pageTitle: string;
   sx: SxProps;
}

const AppBarMobile: React.FC<Props> = props => {
   return (
      <AppBarStyled elevation={1} position='fixed' sx={props.sx}>
         <Toolbar>
            <Link to='/'>
               <div className='logo'>{config.symbol}</div>
            </Link>

            <Text variant='h5' noWrap>
               {' ~/'}
               {props.pageTitle}
            </Text>
         </Toolbar>
      </AppBarStyled>
   );
};

export default AppBarMobile;
