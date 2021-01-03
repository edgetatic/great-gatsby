import type { ThemeOptions } from '@mui/material';
import config from 'config';

const overrides: ThemeOptions['components'] = {
   MuiCard: {
      defaultProps: {
         elevation: config.theme.elevation,
      },
   },
};

export default overrides;
