import { FC, useMemo } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  ICON_STYLES,
  RESPONSE_STYLES,
  TEXT_STYLES,
} from './ServerResponse.styles';

interface Props {
  response: string;
  resetForm: () => void;
}

const SERVER_RESPONSE = {
  approved: {
    icon: <ThumbUpAltIcon fontSize="inherit" />,
    text: 'Approved',
    color: 'success.main',
  },
  undecided: {
    icon: <PsychologyAltIcon fontSize="inherit" />,
    text: 'Undecided',
    color: 'warning.main',
  },
  declined: {
    icon: <ThumbDownAltIcon fontSize="inherit" />,
    text: 'Declined',
    color: 'error.main',
  },
  default: {
    icon: <SignalWifiBadIcon fontSize="inherit" />,
    text: 'Unanswered',
    color: 'secondary.main',
  },
};

export const ServerResponse: FC<Props> = ({ response, resetForm }) => {
  const { icon, text, color } = useMemo(() => {
    const index = response.toLowerCase() as keyof typeof SERVER_RESPONSE;

    return SERVER_RESPONSE[index] || SERVER_RESPONSE['default'];
  }, [response]);

  return (
    <Stack sx={RESPONSE_STYLES}>
      <Box sx={{ ...ICON_STYLES, borderColor: color, color }}>{icon}</Box>
      <Typography sx={TEXT_STYLES} color={color}>
        {text}
      </Typography>
      <Button variant="contained" onClick={resetForm}>
        Try Again
      </Button>
    </Stack>
  );
};
