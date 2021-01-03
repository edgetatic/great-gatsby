import Android from '@mui/icons-material/Android';
import Apple from '@mui/icons-material/Apple';
import CloudIcon from '@mui/icons-material/CloudOutlined';
import DesktopIcon from '@mui/icons-material/DesktopWindowsOutlined';
import type { SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { Platforms } from 'interfaces';

type MapType = Record<keyof Platforms, { icon: typeof SvgIcon; label: string }>;

export const IconMap: MapType = {
   web: {
      icon: CloudIcon,
      label: 'Web',
   },
   android: {
      icon: Android,
      label: 'Android',
   },
   ios: {
      icon: Apple,
      label: 'IOS',
   },
   desktop: {
      icon: DesktopIcon,
      label: 'Desktop',
   },
};

interface Props extends React.PropsWithChildren {
   Icon: typeof SvgIcon;
   to?: string;
}

const PlatformIconButton: React.FC<Props> = ({ Icon, to, children }) => {
   if (!children) {
      return (
         <Box sx={{ py: { md: 0.5 }, px: 0.5 }}>
            <Icon color='secondary' fontSize='inherit' />
         </Box>
      );
   }

   return (
      <Button
         startIcon={<Icon fontSize='small' />}
         href={to}
         variant='outlined'
         color='secondary'
         sx={{ m: 1 }}
      >
         {children}
      </Button>
   );
};

export default PlatformIconButton;
