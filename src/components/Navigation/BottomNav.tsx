import { memo, useCallback, useState } from 'react';
import { Link } from 'gatsby';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import type { BoxProps } from '@mui/material';
import navItems from 'com/Navigation/navItems';
import { BottomNavStyle } from 'com/Navigation/styles';
import { usePathname } from 'libs/utils';

const BottomNav: React.FC<BoxProps> = props => {
   const [value, setValue] = useState<string>();
   const [pathname] = usePathname();

   const handleChange = useCallback(
      (e: React.ChangeEvent<unknown>, value: string) => setValue(value),
      []
   );

   return (
      <BottomNavStyle {...props}>
         <BottomNavigation value={value} onChange={handleChange} showLabels>
            {navItems.map(({ value, label, icon }) => (
               <BottomNavigationAction
                  key={value}
                  component={Link}
                  to={value}
                  label={label}
                  icon={icon(pathname as string)}
                  classes={{ selected: 'selected' }}
                  activeClassName='active'
               />
            ))}
         </BottomNavigation>
      </BottomNavStyle>
   );
};

export default memo(BottomNav);
