import { StaticImage } from 'gatsby-plugin-image';
import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Text from '@mui/material/Typography';
import { CoverPhotoStyle } from 'com/CoverPhoto';
import Layout from 'com/Layout';
import PageContainer from 'com/PageContainer';
import SEO from 'com/SEO';
import Tags from 'com/Tags';
import config from 'config';

const languages = ['Some', 'langu', 'age'];
const frameworks = ['Frame', 'Works'];
const others = ['HTML', 'CSS'];

export function Head() {
   return <SEO title='About' slug='/about' />;
}

export default function AboutPage() {
   return (
      <>
         <Layout appBarTitle='About'>
            <CoverPhotoStyle>
               <StaticImage
                  className='image'
                  src='../../images/about-cover.jpg'
                  alt={`${config.first_name} ${config.last_name}`}
                  layout='fullWidth'
               />
            </CoverPhotoStyle>

            <PageContainer>
               <Text paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum, id eos aperiam architecto eligendi cum accusantium
                  soluta quo ex alias.
               </Text>
               <Text paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  illum nesciunt dignissimos in dolorem sed odio provident
                  veritatis nulla ratione optio facere eum quos corporis sint
                  aperiam necessitatibus ex, hic error. Illo aspernatur enim
                  dolorem culpa laboriosam, dolores necessitatibus reprehenderit
                  tenetur, cum deserunt expedita excepturi quod neque
                  praesentium, architecto voluptatibus.
               </Text>
               <Text paragraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima, dolore.
               </Text>

               <Text variant='h3' gutterBottom mt='3rem'>
                  Skills
               </Text>

               <CardStyled className='card'>
                  <CardHeader title='Programming Languages' />
                  <CardContent>
                     <Tags tags={languages} variant='body1' />
                  </CardContent>
               </CardStyled>

               <CardStyled className='card'>
                  <CardHeader title='Frameworks/Libraries' />
                  <CardContent>
                     <Tags tags={frameworks} variant='body1' />
                  </CardContent>
               </CardStyled>

               <CardStyled className='card'>
                  <CardHeader title='Others' />
                  <CardContent>
                     <Tags tags={others} variant='body1' />
                  </CardContent>
               </CardStyled>

               <Text variant='h3' gutterBottom>
                  Education
               </Text>

               <CardStyled className='card'>
                  <CardHeader title='College Name' />
                  <ul>
                     <li>
                        <Text>Field of Study</Text>
                     </li>
                  </ul>
               </CardStyled>

               <Text variant='h3' gutterBottom>
                  Online Certifications
               </Text>

               <CardStyled className='card'>
                  <CardHeader title='FreeCodeCamp.org' />
                  <ul>
                     <li>
                        <Text paragraph>Item 1</Text>
                     </li>
                     <li>
                        <Text>
                        Item 2
                        </Text>
                     </li>
                  </ul>
               </CardStyled>
            </PageContainer>
         </Layout>
      </>
   );
}

const CardStyled = styled(Card)(({ theme }) => ({
   marginBottom: theme.spacing(2),
}));
