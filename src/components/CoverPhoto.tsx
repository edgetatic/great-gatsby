import type { GatsbyImageProps } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { CardProps } from '@mui/material';
import { Card, styled } from '@mui/material';

export default function CoverPhoto(props: GatsbyImageProps & CardProps) {
   return <CoverPhotoStyle component={GatsbyImage} {...props} />;
}

export const CoverPhotoStyle = styled(Card)(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      maxHeight: '80vh',
      overflow: 'hidden',
   },
   [theme.breakpoints.down('md')]: {
      borderRadius: 0,
   },
})) as typeof Card;
