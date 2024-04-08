import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoanForm } from '../interfaces/LoanForm.interfaces';
import { useCallback, useState } from 'react';
import { loanApi } from '../api/loanApi';

const INITIAL_SETUP = {
  defaultValues: {
    tax_id: '',
    business_name: '',
    request_amount: '',
  },
};

export const useLoanForm = () => {
  const loanFormFields = useForm<ILoanForm>(INITIAL_SETUP);
  const { reset } = loanFormFields;
  const [serverResponse, setServerResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = useCallback(() => {
    setServerResponse('');
    reset(INITIAL_SETUP.defaultValues);
  }, []);

  const onSubmitLoanForm: SubmitHandler<ILoanForm> = useCallback(
    async (values) => {
      setIsLoading(true);

      try {
        const { data } = await loanApi.post<string>('/loan', values);
        setServerResponse(data);
      } catch (err) {
        console.error(err);
        setServerResponse('None');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    loanFormFields,
    onSubmitLoanForm,
    serverResponse,
    isLoading,
    resetForm,
  };
};
