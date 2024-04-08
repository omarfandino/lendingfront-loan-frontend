import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { useLoanForm } from '../../hooks/useLoanForm';
import {
  TITLE_STYLES,
  DESCRIPTION_STYLES,
  PAPER_STYLES,
  STACK_STYLES,
  CONTAINER_STYLES,
  FORM_TITLE_STYLES,
} from './LoanForm.styles';

function LoanForm() {
  const { loanFormFields, onSubmitLoanForm } = useLoanForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = loanFormFields;

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
            <form onSubmit={handleSubmit(onSubmitLoanForm)}>
              <Stack gap={2}>
                <Controller
                  name="taxId"
                  control={control}
                  rules={{ required: 'Tax ID is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Tax ID"
                      variant="outlined"
                      error={Boolean(errors.taxId)}
                      helperText={errors.taxId ? errors.taxId.message : ''}
                    />
                  )}
                />
                <Controller
                  name="businessName"
                  control={control}
                  rules={{ required: 'Business Name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Business Name"
                      variant="outlined"
                      error={Boolean(errors.businessName)}
                      helperText={
                        errors.businessName ? errors.businessName.message : ''
                      }
                    />
                  )}
                />
                <Controller
                  name="requestedAmount"
                  control={control}
                  rules={{
                    required: 'Requested Amount is required',
                    validate: {
                      positive: (value) =>
                        parseInt(value) > 0 ||
                        'Requested Amount should be greater than 0',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Requested Amount"
                      variant="outlined"
                      type="number"
                      error={Boolean(errors.requestedAmount)}
                      helperText={
                        errors.requestedAmount
                          ? errors.requestedAmount.message
                          : ''
                      }
                    />
                  )}
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
