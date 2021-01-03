import { styled } from '@mui/material';
import { drawerWidth } from './fragments/Sidebar/styles';

export const Root = styled('div')(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
   },

   main: {
      minHeight: '100vh',
      maxWidth: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',

      [theme.breakpoints.up('md')]: {
         padding: theme.spacing(3),
      },
      paddingBottom: theme.spacing(3),
   },
}));
