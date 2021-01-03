import { styled } from '@mui/material';
import AnimatedCard from 'com/AnimatedCard';

export const Root = styled(AnimatedCard)(({ theme }) => ({
   height: 400,
   [theme.breakpoints.up('md')]: {
      height: 460,
   },
   border: '1px solid #ffffff1f',

   '.MuiCardActionArea-root': {
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
   },

   '.MuiCardMedia-root': {
      display: 'flex',
   },

   '.MuiCardContent-root': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   },

   '.image': {
      flex: 1,
      height: 210,

      [theme.breakpoints.up('md')]: {
         height: 260,
      },
   },
}));
