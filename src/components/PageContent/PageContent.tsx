import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import {
  TITLE_STYLES,
  DESCRIPTION_STYLES,
  STACK_STYLES,
  CONTAINER_STYLES,
  PAPER_STYLES,
  FORM_TITLE_STYLES,
} from './PageContent.styles';
import LoanForm from '../LoanForm/LoanForm';

function PageContent() {
  return (
    <Container sx={CONTAINER_STYLES}>
      <Stack sx={STACK_STYLES}>
        <Box>
          <Typography sx={TITLE_STYLES}>
            Apply for a{' '}
            <Typography variant="caption">Business Loan </Typography>
            Online
          </Typography>
          <Typography sx={DESCRIPTION_STYLES}>
            Welcome to our online loan application portal! We're here to help
            you secure the funding your business needs to thrive. Please fill
            out the form with the required details, and we'll promptly evaluate
            your application.
          </Typography>
        </Box>
        <Box>
          <Paper elevation={4} sx={PAPER_STYLES}>
            <Typography sx={FORM_TITLE_STYLES}>Loan application</Typography>
            <LoanForm />
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}

export default PageContent;
