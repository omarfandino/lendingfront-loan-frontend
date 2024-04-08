import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  TITLE_STYLES,
  DESCRIPTION_STYLES,
  PAPER_STYLES,
  STACK_STYLES,
  CONTAINER_STYLES,
  FORM_TITLE_STYLES,
} from './LoanForm.styles';

function LoanForm() {
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
            <form>
              <Stack gap={2}>
                <TextField fullWidth label="Tax ID" variant="outlined" />
                <TextField
                  fullWidth
                  label="Nombre del Negocio"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Monto Solicitado"
                  variant="outlined"
                  type="number"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Apply
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}

export default LoanForm;
