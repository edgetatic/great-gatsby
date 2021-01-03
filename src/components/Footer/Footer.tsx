import { styled } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Text from '@mui/material/Typography';
import { drawerWidth } from 'com/Layout/fragments/Sidebar/styles';
import SocialButtons from './SocialButtons';

export default function Footer(props: { children: React.ReactNode }) {
   return (
      <PaperStyle component='footer' square elevation={0}>
         <Container>
            <SocialButtons py={3} />

            <Text color='textSecondary' variant='body2' align='center'>
               {props.children}
               <br />
               Made with
               {` `}
               <Text
                  component='a'
                  href='https://www.react.dev'
                  variant='body2'
                  color='secondary'
               >
                  React,{` `}
               </Text>
               <Text
                  component='a'
                  href='https://www.gatsbyjs.com'
                  variant='body2'
                  color='secondary'
               >
                  Gatsby
               </Text>
               {` `} & {` `}
               <Text
                  component='a'
                  href='https://www.mui.com'
                  variant='body2'
                  color='secondary'
               >
                  Material-UI
               </Text>
            </Text>
         </Container>
      </PaperStyle>
   );
}

const PaperStyle = styled(Paper)(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
   },
   paddingBottom: theme.spacing(3),
   backdropFilter: 'blur(3px) saturate(3)',
})) as typeof Paper;
