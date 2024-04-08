import { SxProps, Theme } from '@mui/material';

export const GRID_STYLES: SxProps<Theme> = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
};

export const CONTENT_STYLES: SxProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
};
