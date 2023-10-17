import React, { useEffect } from 'react';
import { useRegisterTransactionViewModel } from './useRegisterTransactionViewModel';

const SaveDataScreenView: React.FC = () => {

  const {registerTransaction} = useRegisterTransactionViewModel();

  useEffect(() => {
    registerTransaction();
  }, [])

  return <></>;
}

export default SaveDataScreenView;