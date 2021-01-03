import Send from '@mui/icons-material/SendRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Text from '@mui/material/Typography';
import Layout from 'com/Layout';
import PageContainer from 'com/PageContainer';
import SEO from 'com/SEO';
import config from 'config';

export function Head() {
   return <SEO title='Contact' slug='/contact' />;
}

export const Contact: React.FC = () => {
   const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const data = {
         email: formData.get('email') as string,
         subject: formData.get('subject') as string,
         message: formData.get('message') as string,
      };

      const { email, subject, message } = data;

      const url = `mailto:${config.email}?from=${email}&subject=${subject}&body=${message}`;

      const a = document.createElement('a');

      a.setAttribute('href', url);
      a.setAttribute('target', '_blank');
      a.click();
   };

   return (
      <>
         <Layout appBarTitle='Contact'>
            <PageContainer
               sx={{
                  minHeight: '100dvh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
               }}
            >
               <Text variant='h4' gutterBottom>
                  Get in touch!
               </Text>

               {/* @ts-expect-error trust me bro, it's not a div element anymore */}
               <Card component='form' onSubmit={handleSubmit}>
                  <Box
                     component={CardContent}
                     display='flex'
                     flexDirection='column'
                     sx={{ gap: 2 }}
                  >
                     <TextField
                        required
                        color='secondary'
                        label='Email'
                        name='email'
                        placeholder='Your email'
                     />

                     <TextField
                        required
                        color='secondary'
                        label='Subject'
                        name='subject'
                        placeholder='Subject'
                     />

                     <TextField
                        multiline
                        minRows={15}
                        required
                        color='secondary'
                        label='Message'
                        name='message'
                        placeholder='Your message'
                     />

                     <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                        size='large'
                        endIcon={<Send />}
                     >
                        Send
                     </Button>
                  </Box>
               </Card>
            </PageContainer>
         </Layout>
      </>
   );
};

export default Contact;
