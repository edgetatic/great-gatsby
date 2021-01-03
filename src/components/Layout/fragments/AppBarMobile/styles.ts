import { AppBar, styled } from '@mui/material';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
   backgroundColor: 'transparent',
   borderBottom: `1px solid #ffffff1f`,

   '.MuiToolbar-root': {
      display: 'flex',
      backgroundColor: theme.vars.palette.background.paper,
      backdropFilter: 'blur(15px) saturate(3)',

      '.MuiTypography-root': {
         fontWeight: 'bold',
         color: theme.vars.palette.text.primary,
      },
   },

   '.logo': {
      width: 40,
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: `2px solid ${theme.vars.palette.secondary.main}`,
      color: theme.vars.palette.secondary.main,
      marginRight: theme.spacing(1.5),
      fontFamily: 'cursive',
      lineHeight: 0,
      fontSize: 24,
   },
}));
