import { styled } from '@mui/material';
import AnimatedCard from 'com/AnimatedCard';

export const Root = styled(AnimatedCard)(({ theme }) => ({
   '.MuiCardActionArea-root': {
      height: 210,
      flex: 1,
      display: 'flex',
      alignItems: 'start',
      [theme.breakpoints.down('sm')]: {
         height: 'unset',
         flexDirection: 'column',
      },
   },

   '.MuiCardMedia-root': {
      width: 'inherit',
      height: 'inherit',
      [theme.breakpoints.up('sm')]: {
         width: 300,
      },
      [theme.breakpoints.up('md')]: {
         width: 373,
      },
   },

   '.image': {
      height: 'inherit',
      width: 'inherit',
   },

   '.MuiCardContent-root': {
      width: 'inherit',
      height: 'inherit',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
   },

   '.icons': {
      alignSelf: 'center',
      [theme.breakpoints.down('md')]: {
         // hack to not use flex
         writingMode: 'vertical-lr',
      },
      [theme.breakpoints.up('sm')]: {
         padding: theme.spacing(1.5),
      },
   },

   '.tags': {
      marginTop: 'auto',
      [theme.breakpoints.down('md')]: {
         marginTop: theme.spacing(1),
      },
   },
}));
