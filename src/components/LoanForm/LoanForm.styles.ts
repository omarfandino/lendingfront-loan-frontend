import { SxProps, Theme } from '@mui/material';

export const FORM_STACK_STYLES: SxProps<Theme> = {
  gap: 2,

  '& .MuiInputBase-input': {
    color: 'secondary.main',
  },
};

export const LOADER_STYLES: SxProps = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
