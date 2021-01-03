import { styled } from '@mui/material';
import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';

interface Props extends BoxProps {
   tags: Array<string>;
   variant?: TypographyProps['variant'];
}

export default function Tags({ tags, variant, ...props }: Props) {
   if (tags.filter(Boolean).length === 0) {
      return null;
   }

   return (
      <Box display='flex' flexWrap='wrap' {...props}>
         {tags.map((tag: string, index: number) => {
            return (
               <Tag key={index}>
                  <Typography variant={variant || 'caption'}>{tag}</Typography>
               </Tag>
            );
         })}
      </Box>
   );
}

const Tag = styled('span')(({ theme }) => ({
   padding: 0,
   paddingLeft: theme.spacing(1),
   paddingRight: theme.spacing(1),
   margin: 2,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: `1px dotted ${theme.vars.palette.text.secondary}`,
   borderRadius: theme.vars.shape.borderRadius,
   color: theme.vars.palette.text.secondary,
}));
