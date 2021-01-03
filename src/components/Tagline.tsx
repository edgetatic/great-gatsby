import { styled, type SxProps } from '@mui/material';
import Text from '@mui/material/Typography';
import config from 'config';

interface Props {
   sx?: SxProps;
}

const Tagline: React.FC<Props> = props => {
   return (
      <Root noWrap variant='body2' {...props}>
         {config.profession}
      </Root>
   );
};

const Root = styled(Text)({
   fontFamily:
      '"source code pro", monaco, "Jetbrains mono", "fira code", hack, "roboto mono", consolas, monospace',
});

export default Tagline;
