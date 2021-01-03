import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import View from '@mui/material/Box';
import Container from '@mui/material/Container';
import Text from '@mui/material/Typography';
import type { BlogMD } from 'interfaces';
import StyledGatsbyImage from 'com/CoverPhoto';
import FBLikeButton from 'com/FBLikeButton';
import Layout from 'com/Layout';
import Markdown from 'com/MD/Markdown';
import ReadviewDivider from 'com/ReadviewDivider';
import Tags from 'com/Tags';
import { createTitleFromSlug } from 'libs/utils';

interface Props {
   markdownRemark: BlogMD;
}

const BlogView: React.FC<Props> = ({ markdownRemark }) => {
   const md = markdownRemark;
   const { title, tags, cover_image, blogViewDate } = md.frontmatter;
   const headTitle = createTitleFromSlug(md.fields.slug);

   return (
      <Layout appBarTitle={headTitle}>
         <View marginBottom={2}>
            <StyledGatsbyImage
               image={getImage(cover_image) as IGatsbyImageData}
               alt={title}
            />
         </View>

         <Container>
            <Text color='textSecondary' gutterBottom>
               {blogViewDate}
            </Text>

            <Text variant='h4' gutterBottom textTransform='uppercase'>
               {title}
            </Text>

            <View display='flex' alignItems='center'>
               <Text color='textSecondary' variant='body2'>
                  {md.wordCount.words} Words
               </Text>

               <Text color='textSecondary' py={0} px={1}>
                  |
               </Text>

               <Text color='textSecondary' variant='body2'>
                  {md.timeToRead} Minutes to read!
               </Text>
            </View>

            <ReadviewDivider />

            <article>
               <Markdown>{md.html}</Markdown>
            </article>

            <View paddingY={2}>
               <Tags tags={tags} />
            </View>

            <FBLikeButton />
         </Container>
      </Layout>
   );
};

export default BlogView;
