import { StaticImage } from 'gatsby-plugin-image';
import type { SxProps } from '@mui/material';
import { styled } from '@mui/material';
import config from 'config';

interface Props {
   sx?: SxProps;
}

const Avatar: React.FC<Props> = props => {
   // Using a dynamic image is not possible
   // both in StaticImage or static graphql query with GatsbyImage
   // dynamic props only works in page context

   return (
      <ImageContainer {...props}>
         <StaticImage
            className='image'
            src='../../images/avatar.jpg'
            alt={`${config.first_name} ${config.last_name}`}
            loading='eager'
         />
      </ImageContainer>
   );
};

const ImageContainer = styled('div')({
   width: 100,
   height: 100,
   borderRadius: '50%',
   border: '3px solid #73d0ff',
   borderBottomStyle: 'dotted',
   overflow: 'hidden',

   '.image': {
      borderRadius: 'inherit',
   },
});

export default Avatar;
