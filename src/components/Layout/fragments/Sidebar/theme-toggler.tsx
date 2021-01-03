'use client';

import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

const ThemeToggler = () => {
   const { mode, setMode } = useColorScheme();

   const handleClick = () => {
      if (mode === 'light') {
         return setMode('dark');
      }

      setMode('light');
   };

   return (
      <IconButton
         sx={{
            zIndex: 1300,
            borderRadius: '50%',
            boxShadow: theme => theme.vars.shadows[4],
         }}
         color='warning'
         onClick={handleClick}
      >
         {mode === 'light' ? <DarkModeRounded /> : <LightModeRounded />}
      </IconButton>
   );
};

export default ThemeToggler;
