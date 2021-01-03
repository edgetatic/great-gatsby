import { Link as GatsbyLink } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import type { MarkdownToJSX } from 'markdown-to-jsx';
import { Highlight } from 'prism-react-renderer';
import cyberDark from 'theme/cyberDark.prism';

type GetTypography = (
   variant: TypographyProps['variant'],
   props?: TypographyProps
) => MarkdownToJSX.Override;

const getTypography: GetTypography = (variant, props) => {
   // eslint-disable-next-line react/display-name
   return markdownToJSXProps => (
      <Typography variant={variant} {...props} {...markdownToJSXProps} />
   );
};

const MarkdownOverrides: MarkdownToJSX.Overrides = {
   h1: getTypography('h1', { my: 4, mb: 3 }),
   h2: getTypography('h2', { my: 4, mb: 3 }),
   h3: getTypography('h3', { my: 4, mb: 3 }),
   h4: getTypography('h4', { my: 2 }),
   h5: getTypography('h5', { my: 1.5 }),
   h6: getTypography('h6', { my: 1 }),

   code: props => {
      const lang = props.class?.replace('language-', '') || 'text';
      const isText = lang === 'text';
      let LineComponent = 'div';

      if (isText) {
         LineComponent = 'span';
      }

      return (
         <Highlight
            theme={cyberDark}
            language={lang}
            code={props.children[0].trim()}
         >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
               <CodeBlock
                  className={className}
                  style={style}
                  sx={theme => ({
                     ...(!isText && {
                        p: 2,
                        display: 'block',
                        boxShadow: theme.vars.shadows[4],
                     }),
                  })}
               >
                  {tokens.map((line, i) => {
                     return (
                        // @ts-expect-error madness
                        <LineComponent
                           key={i}
                           {...getLineProps({ line, key: i })}
                        >
                           {line.map((token, key) => (
                              <span
                                 key={key}
                                 {...getTokenProps({ token, key })}
                              />
                           ))}
                        </LineComponent>
                     );
                  })}
               </CodeBlock>
            )}
         </Highlight>
      );
   },

   p: props => {
      const node = props.children[0];

      if (node.type === 'img') {
         return <ImageComponent {...node.props} />;
      }

      return <Typography paragraph {...props} />;
   },

   a: props => {
      const extraterrestrial = String(props.href).startsWith('http');

      return (
         <Link
            component={GatsbyLink}
            to={props.href as string}
            sx={{ lineBreak: 'anywhere' }}
            color='secondary'
            target={extraterrestrial ? '_blank' : undefined}
            {...props}
         />
      );
   },

   blockquote: props => {
      return <Blockquote {...props} />;
   },
};

interface Props {
   src: null;
   alt: string;
}

const ImageComponent: React.FC<Props> = ({ src, alt }) => {
   return (
      <Container>
         <GatsbyImage image={getImage(src) as IGatsbyImageData} alt={alt} />
      </Container>
   );
};

const Container = styled('div')(({ theme }) => ({
   paddingTop: theme.spacing(2),
   paddingBottom: theme.spacing(2),
   cursor: 'pointer',
}));

const CodeBlock = styled(Typography)(({ theme }) => ({
   fontFamily: 'var(--fontFamily-code)',
   textAlign: 'left',
   marginTop: theme.spacing(1),
   padding: theme.spacing(0.5),
   borderRadius: theme.vars.shape.borderRadius,
   overflowX: 'auto',
}));

CodeBlock.defaultProps = {
   // @ts-expect-error type bug
   component: 'code',
};

const Blockquote = styled('blockquote')(({ theme }) => ({
   borderLeftWidth: theme.spacing(1),
   borderLeftColor: theme.vars.palette.warning.main,
   borderLeftStyle: 'solid',
   borderRadius: 'inherit',
   margin: 0,
   marginBottom: theme.spacing(1.5),
   padding: theme.spacing(1),
   paddingLeft: theme.spacing(1.5),
   backgroundColor: theme.vars.palette.background.paper,

   '.MuiTypography-root': {
      marginBottom: 0,
   },
}));

export default MarkdownOverrides;
