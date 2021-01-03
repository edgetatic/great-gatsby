import { Link as GatsbyLink } from 'gatsby';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import { Link, styled } from '@mui/material';
import Text from '@mui/material/Typography';
import Avatar from 'com/Avatar';
import Layout from 'com/Layout';
import SEO from 'com/SEO';
import Tagline from 'com/Tagline';
import { trimEmail } from 'libs/utils';
import config from 'config';
import backdrop from '../../images/backdrop.webp';

export function Head() {
   return <SEO title='' />;
}

export default function HomePage() {
   return (
      <>
         <BackdropImage />

         <Layout appBarTitle='Home'>
            <Root>
               <Avatar sx={{ display: { md: 'none' } }} />

               <Text noWrap variant='h3' textTransform='uppercase' p={1}>
                  <Text variant='inherit' fontWeight='lighter' display='inline'>
                     {config.first_name}
                  </Text>
                  <strong> {config.last_name}</strong>
               </Text>

               <Tagline sx={{ fontSize: 'larger', display: { md: 'none' } }} />

               <Info>
                  <Link component={GatsbyLink} className='item' to='/contact'>
                     <MailIcon color='secondary' />
                     <Text variant='subtitle2'>{trimEmail(config.email)}</Text>
                  </Link>

                  <div className='item'>
                     <LocationIcon color='secondary' />
                     <Text variant='subtitle2'>{config.basedIn}</Text>
                  </div>
               </Info>
            </Root>
         </Layout>
      </>
   );
}

const BackdropImage = styled('div')(({ theme }) => ({
   position: 'fixed',
   width: '100%',
   height: '100vh',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundAttachment: 'fixed',
   zIndex: -100,
   backgroundImage: `url(${backdrop})`,
   backgroundColor: theme.vars.palette.background.default,
   backgroundBlendMode: 'difference',

   [theme.getColorSchemeSelector('dark')]: {
      backgroundBlendMode: 'hard-light',
   },
}));

const Root = styled('div')(({ theme }) => ({
   height: '100dvh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      gap: theme.spacing(1),
   },
}));

const Info = styled('div')(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      borderLeft: `4px solid ${theme.vars.palette.secondary.main}`,
   },
   padding: 10,

   '.item': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
         justifyContent: 'center',
      },
      color: 'inherit',
      padding: 5,
   },
}));
