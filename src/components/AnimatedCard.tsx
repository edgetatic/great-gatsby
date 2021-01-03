import type { CardProps } from '@mui/material';
import { Card, Slide } from '@mui/material';

const AnimatedCard: React.FC<CardProps> = ({ children, ...props }) => {
   return (
      <Slide in direction='up' timeout={450}>
         <Card {...props}>{children}</Card>
      </Slide>
   );
};

export default AnimatedCard;
