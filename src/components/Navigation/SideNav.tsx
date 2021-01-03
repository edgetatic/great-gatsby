import { Link } from 'gatsby';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'libs/utils';
import navItems from './navItems';
import { SideNavStyle } from './styles';

const SideNav = () => {
   const [pathname, setPathname] = usePathname();

   // I don't see any other way to update a ssr component reactively
   function onMouseOver() {
      // @ts-expect-error not an error
      setPathname(window.location.pathname);
   }

   return (
      <SideNavStyle onMouseOver={onMouseOver}>
         {navItems.map(({ value, label, icon }) => (
            <ListItemButton
               key={label}
               component={Link}
               to={value}
               onMouseOver={onMouseOver}
               activeClassName='active'
            >
               <ListItemIcon>{icon(pathname as string)}</ListItemIcon>
               <ListItemText>{label}</ListItemText>
            </ListItemButton>
         ))}
      </SideNavStyle>
   );
};

export default SideNav;
