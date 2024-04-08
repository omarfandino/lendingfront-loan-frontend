import { SxProps, Theme } from '@mui/material';

export const CONTAINER_STYLES: SxProps<Theme> = {
  padding: (theme) => theme.spacing(4, 1),
};

export const STACK_STYLES: SxProps<Theme> = {
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  alignItems: 'center',
  gap: {
    xs: 4,
    md: 8,
    lg: 22,
  },
  textAlign: {
    xs: 'center',
    md: 'inherit',
  },
};

export const PAPER_STYLES: SxProps<Theme> = {
  width: {
    xs: 320,
    sm: 400,
  },
  maxWidth: 400,
  padding: (theme) => theme.spacing(5),
};

export const TITLE_STYLES: SxProps<Theme> = {
  color: 'primary.main',
  fontSize: {
    xs: '1.8rem',
    md: '2.2rem',
  },
  pb: (theme) => theme.spacing(2.5),

  '& .MuiTypography-root': {
    color: 'secondary.main',
    fontSize: '1em',
  },
};

export const DESCRIPTION_STYLES: SxProps = {
  color: 'secondary.main',
  fontSize: {
    xs: '1.2rem',
    md: '1.4rem',
  },
};

export const FORM_TITLE_STYLES: SxProps<Theme> = {
  fontSize: '1.6rem',
  mb: (theme) => theme.spacing(2.5),
  textAlign: 'center',
};
