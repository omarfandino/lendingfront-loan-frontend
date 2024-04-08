import { Box, Button, CircularProgress, Stack, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useLoanForm } from '../../hooks/useLoanForm';
import { FORM_STACK_STYLES, LOADER_STYLES } from './LoanForm.styles';
import { ServerResponse } from './components/ServerResponse/ServerResponse';

function LoanForm() {
  const {
    loanFormFields,
    onSubmitLoanForm,
    serverResponse,
    isLoading,
    resetForm,
  } = useLoanForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = loanFormFields;

  if (isLoading) {
    return (
      <Box sx={LOADER_STYLES}>
        <CircularProgress color="secondary" size={100} />
      </Box>
    );
  }

  if (serverResponse) {
    return <ServerResponse response={serverResponse} resetForm={resetForm} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLoanForm)}>
      <Stack sx={FORM_STACK_STYLES}>
        <Controller
          name="tax_id"
          control={control}
          rules={{ required: 'Tax ID is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Tax ID"
              variant="outlined"
              error={Boolean(errors.tax_id)}
              helperText={errors.tax_id ? errors.tax_id.message : ''}
            />
          )}
        />
        <Controller
          name="business_name"
          control={control}
          rules={{ required: 'Business Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Business Name"
              variant="outlined"
              error={Boolean(errors.business_name)}
              helperText={
                errors.business_name ? errors.business_name.message : ''
              }
            />
          )}
        />
        <Controller
          name="request_amount"
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
              error={Boolean(errors.request_amount)}
              helperText={
                errors.request_amount ? errors.request_amount.message : ''
              }
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Apply
        </Button>
      </Stack>
    </form>
  );
}

export default LoanForm;
