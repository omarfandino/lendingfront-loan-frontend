import { SxProps, Theme } from '@mui/material';

export const RESPONSE_STYLES: SxProps = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
};

export const ICON_STYLES: SxProps<Theme> = {
  borderWidth: 4,
  borderStyle: 'solid',
  lineHeight: 0,
  padding: (theme) => theme.spacing(3),
  borderRadius: '100%',
  fontSize: 100,
};

export const TEXT_STYLES: SxProps = {
  fontSize: '1.25rem',
  fontWeight: 'bold'
};
