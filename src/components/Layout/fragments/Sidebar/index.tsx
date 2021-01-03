import { Paper } from '@mui/material';
import type { BoxProps } from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Text from '@mui/material/Typography';
import Avatar from 'com/Avatar';
import SideNav from 'com/Navigation/SideNav';
import Tagline from 'com/Tagline';
import config from 'config';
import { Root } from './styles';
import ThemeToggler from './theme-toggler';

interface Props extends BoxProps {
   siteTitle: string;
}

const SidebarDrawer: React.FC<Props> = props => {
   return (
      <Root {...props}>
         <Paper variant='outlined' square aria-label='navigation menu'>
            <header>
               <Avatar />

               <Text variant='overline' className='title'>
                  <abbr title={`${config.first_name} ${config.last_name}`}>
                     {props.siteTitle}
                  </abbr>
               </Text>

               <Tagline />
            </header>

            <Divider />
            <SideNav />

            <Divider />

            <footer>
               <ThemeToggler />
            </footer>
         </Paper>
      </Root>
   );
};

export default SidebarDrawer;
