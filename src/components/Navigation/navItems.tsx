import Blog from '@mui/icons-material/BorderColorOutlined';
import BlogRounded from '@mui/icons-material/BorderColorRounded';
import Contact from '@mui/icons-material/ContactMailOutlined';
import ContactRounded from '@mui/icons-material/ContactMailRounded';
import Home from '@mui/icons-material/HomeOutlined';
import HomeRounded from '@mui/icons-material/HomeRounded';
import About from '@mui/icons-material/PersonOutline';
import AboutRounded from '@mui/icons-material/PersonRounded';
import Project from '@mui/icons-material/WorkOutline';
import ProjectRounded from '@mui/icons-material/WorkRounded';
import type { SvgIcon } from '@mui/material';

interface NavItem {
   value: string;
   label: string;
   icon: (pathname: string) => JSX.Element;
}

enum Routes {
   HOME = '/',
   PROJECTS = '/projects/',
   BLOGS = '/blogs/',
   ABOUT = '/about/',
   CONTACT = '/contact/',
}

export default [
   {
      value: Routes.HOME,
      label: 'Home',
      icon: pathname =>
         getDynamicIcon({
            pathname,
            route: Routes.HOME,
            ActiveIcon: HomeRounded,
            InActiveIcon: Home,
         }),
   },
   {
      value: Routes.PROJECTS,
      label: 'Projects',
      icon: pathname =>
         getDynamicIcon({
            pathname,
            route: Routes.PROJECTS,
            ActiveIcon: ProjectRounded,
            InActiveIcon: Project,
         }),
   },
   {
      value: Routes.BLOGS,
      label: 'Blogs',
      icon: pathname =>
         getDynamicIcon({
            pathname,
            route: Routes.BLOGS,
            ActiveIcon: BlogRounded,
            InActiveIcon: Blog,
         }),
   },
   {
      value: Routes.ABOUT,
      label: 'About',
      icon: pathname =>
         getDynamicIcon({
            pathname,
            route: Routes.ABOUT,
            ActiveIcon: AboutRounded,
            InActiveIcon: About,
         }),
   },
   {
      value: Routes.CONTACT,
      label: 'Contact',
      icon: pathname =>
         getDynamicIcon({
            pathname,
            route: Routes.CONTACT,
            ActiveIcon: ContactRounded,
            InActiveIcon: Contact,
         }),
   },
] as Array<NavItem>;

type Icon = typeof SvgIcon;

interface Args {
   pathname: string;
   route: string;
   ActiveIcon: Icon;
   InActiveIcon: Icon;
}

function getDynamicIcon({ pathname, route, ActiveIcon, InActiveIcon }: Args) {
   return pathname === route ? (
      <ActiveIcon color='secondary' />
   ) : (
      <InActiveIcon color='secondary' />
   );
}
