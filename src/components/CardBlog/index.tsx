import { Link } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Stack } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Text from '@mui/material/Typography';
import type { BlogCardProps } from 'interfaces';
import { Root } from './styles';

export default function BlogCard(props: BlogCardProps) {
   const { fields, timeToRead, excerpt } = props;
   const { cover_image, title, blogCardDate } = props.frontmatter;
   const slug = fields.slug;

   return (
      <Root>
         <CardActionArea component={Link} to={slug}>
            <CardMedia>
               <GatsbyImage
                  className='image'
                  image={getImage(cover_image) as IGatsbyImageData}
                  alt={title}
               />
            </CardMedia>

            <CardContent>
               <Text textTransform='uppercase' variant='h5'>
                  {title}
               </Text>

               <Text color='textSecondary' py={1}>
                  {excerpt}
               </Text>

               <Stack direction='row' justifyContent='space-between'>
                  <Text variant='subtitle2' color='textSecondary'>
                     {blogCardDate}
                  </Text>

                  <Text variant='subtitle2' color='textSecondary'>
                     {timeToRead} Minutes Read
                  </Text>
               </Stack>
            </CardContent>
         </CardActionArea>
      </Root>
   );
}
