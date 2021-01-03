import type { SxProps } from '@mui/material';
import { Container } from '@mui/material';

interface Props extends React.PropsWithChildren {
   sx?: SxProps;
}

function PageContainer(props: Props) {
   return (
      <Container
         sx={{
            pt: 2.5,
            ...props.sx,
         }}
      >
         <>{props.children}</>
      </Container>
   );
}

export default PageContainer;
