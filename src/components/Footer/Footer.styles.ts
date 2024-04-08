import { SxProps, Theme } from '@mui/material';

export const FOOTER_STYLES: SxProps<Theme> = {
  backgroundColor: '#F0F0F2',
  color: 'secondary.main',
  textAlign: 'center',
  p: (theme) => theme.spacing(1.25),
};
