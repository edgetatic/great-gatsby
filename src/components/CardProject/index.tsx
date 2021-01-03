import { Link } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import type { BoxProps } from '@mui/material/Box';
import View from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Text from '@mui/material/Typography';
import type { Platforms, ProjectCardProps } from 'interfaces';
import PlatformIconButton, { IconMap } from 'com/PlatformIconButton';
import Tags from 'com/Tags';
import { Root } from './styles';

export default function ProjectCard(props: ProjectCardProps) {
   const {
      platforms,
      projectDate,
      title,
      tags,
      subtitle,
      cover_image,
      isOpenSource,
   } = props.frontmatter;
   const slug = props.fields.slug;

   const Icons = (boxProps: BoxProps) => (
      <View className='icons' {...boxProps}>
         {isOpenSource && <PlatformIconButton Icon={GitHubIcon} />}

         {Object.entries(platforms).map(([key, value]) => {
            if (!value) return null;

            const name = key as keyof Platforms;

            return <PlatformIconButton key={key} Icon={IconMap[name].icon} />;
         })}
      </View>
   );

   return (
      <Root>
         <CardActionArea component={Link} to={slug}>
            <CardMedia title={title}>
               <GatsbyImage
                  image={getImage(cover_image) as IGatsbyImageData}
                  alt={title}
                  className='image'
               />
            </CardMedia>

            <CardContent>
               <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
               >
                  <Text color='textSecondary'>{projectDate}</Text>
                  <Icons sx={{ display: { md: 'none' } }} />
               </Stack>

               <Text variant='h2'>{title}</Text>

               <Text variant='subtitle1' color='textSecondary'>
                  {subtitle}
               </Text>

               <Tags className='tags' tags={tags} />
            </CardContent>

            <Icons sx={{ display: { xs: 'none', md: 'block' } }} />
         </CardActionArea>
      </Root>
   );
}
