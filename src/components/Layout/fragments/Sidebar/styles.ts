import { Box, styled } from '@mui/material';

export const drawerWidth = 280;

export const Root = styled(Box)(({ theme }) => ({
   width: drawerWidth,

   '.MuiPaper-root': {
      width: 'inherit',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1,
      overflowY: 'auto',
      backdropFilter: 'blur(3px) saturate(3)',
      borderLeft: 0,
      borderBottom: 0,
      borderTop: 0,
      boxShadow: '0 0 2px #868688',
      [theme.getColorSchemeSelector('dark')]: {
         boxShadow: '0 0 2px #000',
      },
   },

   header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: drawerWidth,
   },

   footer: {
      padding: theme.spacing(2.5),
      display: 'flex',
      marginTop: 'auto',
   },

   '.title': {
      fontSize: 'larger',
      fontWeight: 'bold',
      textTransform: 'initial',
   },
}));
