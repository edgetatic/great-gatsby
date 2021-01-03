import type { Theme } from '@mui/material';
import { Box, styled } from '@mui/material';

export const SideNavStyle = styled('nav')(({ theme }) => ({
   '.MuiListItemButton-gutters': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
   },

   '.MuiListItemIcon-root': {
      minWidth: theme.spacing(5.5),
   },

   '.active': getActiveStyle(theme),
}));

export const BottomNavStyle = styled(Box)(({ theme }) => ({
   position: 'sticky',
   bottom: 0,
   width: '100%',
   backgroundColor: theme.vars.palette.background.paper,
   backdropFilter: 'blur(15px) saturate(3)',
   boxShadow: theme.vars.shadows[8],
   borderTop: `0.5px solid #ffffff1f`,

   '.MuiBottomNavigation-root': {
      background: 'transparent',
   },

   '.MuiBottomNavigationAction-root': {
      minWidth: 63,
   },

   '.selected': getActiveStyle(theme),
   '.active': getActiveStyle(theme),
}));

function getActiveStyle(theme: Theme) {
   return {
      background: theme.vars.palette.primary.main,
      color: theme.vars.palette.text.primary,

      [theme.getColorSchemeSelector('dark')]: {
         color: theme.vars.palette.secondary.main,
      },

      '.MuiTypography-root': {
         fontWeight: '700',
      },

      '.MuiBottomNavigationAction-label': {
         fontWeight: '700',
      },
   };
}
