import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { links } from 'config/footer';

const SocialButtons = (props: BoxProps) => {
   return (
      <Box component='section' textAlign='center' {...props}>
         {links.map(({ url, icon }) => (
            <IconButton
               component='a'
               href={url}
               key={url}
               color='secondary'
               size='large'
            >
               {icon}
            </IconButton>
         ))}
      </Box>
   );
};

export default SocialButtons;
