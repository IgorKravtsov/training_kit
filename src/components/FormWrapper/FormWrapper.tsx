import React from 'react'

import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

export interface FormProps {
  formFeatures: UseFormReturn<any, unknown>
  onSubmit: (data: any) => void
  onError?: (error: any) => void
}

const FormWrapper: React.FC<FormProps> = ({
  formFeatures,
  onSubmit,
  onError,
  children,
}): React.ReactElement => {
  const { handleSubmit } = formFeatures

  return (
    <FormProvider {...formFeatures}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>{children}</form>
    </FormProvider>
  )
}

export default FormWrapper
