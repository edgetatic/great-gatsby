import { graphql, useStaticQuery } from 'gatsby';
import { Fade, Toolbar, Typography } from '@mui/material';
import Footer from 'com/Footer/Footer';
import AppBarMobile from 'com/Layout/fragments/AppBarMobile';
import BottomNav from 'com/Navigation/BottomNav';
import SidebarDrawer from './fragments/Sidebar';
import { Root } from './styles';

interface Props extends React.PropsWithChildren {
   appBarTitle: string;
}

const Layout: React.FC<Props> = ({ appBarTitle, children }) => {
   const { site } = useStaticQuery(graphql`
      {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   const siteTitle: string = site.siteMetadata.title;

   return (
      <>
         <AppBarMobile
            sx={{ display: { md: 'none' } }}
            pageTitle={appBarTitle}
         />

         <SidebarDrawer
            sx={{ display: { xs: 'none', md: 'block' } }}
            siteTitle={siteTitle}
         />

         <Root>
            <Fade in exit timeout={300} mountOnEnter>
               <main>
                  <Toolbar sx={{ display: { md: 'none' } }} />

                  {children}
               </main>
            </Fade>
         </Root>

         <BottomNav sx={{ display: { md: 'none' } }} />

         <Footer>
            {new Date().getFullYear()}
            {/* just for fun, these are just standard html code/characters */}
            {'\u0020\u00a9\u0020'}
            <Typography
               component='a'
               href={
                  '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0065\u0064\u0067\u0065\u0074\u0061\u0074\u0069\u0063\u002e\u0076\u0065\u0072\u0063\u0065\u006c\u002e\u0061\u0070\u0070'
               }
               variant='body2'
               color='secondary'
            >
               {'\u0045\u0064\u0067\u0065\u0074\u0061\u0074\u0069\u0063'}
            </Typography>
         </Footer>
      </>
   );
};

export default Layout;
