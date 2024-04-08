import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoanForm } from '../interfaces/LoanForm.interfaces';

const INITIAL_SETUP = {
  defaultValues: {
    taxId: '',
    businessName: '',
    requestedAmount: '',
  },
};

export const useLoanForm = () => {
  const loanFormFields = useForm<ILoanForm>(INITIAL_SETUP);
  
  const onSubmitLoanForm: SubmitHandler<ILoanForm> = (data) => {
    console.log(data)
  }

  return {
    loanFormFields,
	onSubmitLoanForm
  };
};
