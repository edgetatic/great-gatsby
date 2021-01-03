import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import GitHubIcon from '@mui/icons-material/GitHub';
import View from '@mui/material/Box';
import Container from '@mui/material/Container';
import Text from '@mui/material/Typography';
import type { Platforms, ProjectMD } from 'interfaces';
import StyledGatsbyImage from 'com/CoverPhoto';
import FBLikeButton from 'com/FBLikeButton';
import Layout from 'com/Layout';
import Markdown from 'com/MD/Markdown';
import PlatformIconButton, { IconMap } from 'com/PlatformIconButton';
import ReadviewDivider from 'com/ReadviewDivider';
import { createTitleFromSlug } from 'libs/utils';

interface Props {
   markdownRemark: ProjectMD;
}

const ProjectView: React.FC<Props> = ({ markdownRemark }) => {
   const md = markdownRemark;
   const { title, cover_image, projectDate, isOpenSource, platforms } =
      md.frontmatter;

   const headTitle = createTitleFromSlug(md.fields.slug);
   const gatsbyImage = getImage(cover_image) as IGatsbyImageData;

   const handleImageClick = () => {
      window && (window.location.href = gatsbyImage.images.fallback?.src ?? '');
   };

   return (
      <Layout appBarTitle={headTitle}>
         <View
            marginBottom={4}
            onClick={handleImageClick}
            sx={{ cursor: 'pointer' }}
         >
            <StyledGatsbyImage image={gatsbyImage} alt={title} />
         </View>

         <Container>
            <Text variant='h2' textTransform='uppercase'>
               {title}
            </Text>
            <Text color='textSecondary'>{projectDate}</Text>

            <ReadviewDivider />

            <article>
               <Markdown>{md.html}</Markdown>
            </article>

            <View textAlign='center' py={3}>
               {isOpenSource && (
                  <PlatformIconButton to={isOpenSource} Icon={GitHubIcon}>
                     GitHub
                  </PlatformIconButton>
               )}

               {Object.entries(platforms).map(([key, value]) => {
                  if (!value) return null;

                  const name = key as keyof Platforms;

                  return (
                     <PlatformIconButton
                        key={key}
                        to={value}
                        Icon={IconMap[name].icon}
                     >
                        {IconMap[name].label}
                     </PlatformIconButton>
                  );
               })}
            </View>

            <FBLikeButton />
         </Container>
      </Layout>
   );
};

export default ProjectView;
