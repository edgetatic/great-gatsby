import Text from '@mui/material/Typography';
import Layout from 'com/Layout';
import PageContainer from 'com/PageContainer';
import SEO from 'com/SEO';

export function Head() {
   return <SEO title='Error 404' slug='/404' />;
}

export default function Error404() {
   return (
      <>
         <Layout appBarTitle='Error 404 😢'>
            <PageContainer>
               <Text variant='h1'>NOT FOUND</Text>
               <Text paragraph>
                  You just hit a route that doesn&#39;t exist... the sadness!
               </Text>
            </PageContainer>
         </Layout>
      </>
   );
}
