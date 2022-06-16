import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

export const useOneTrainingValidation = () => {
  const { t } = useTranslation(['common'])

  const validationSchema = yup.object({
    title: yup.string().trim().required(t('common:validation.required')),
    description: yup.string().trim(),
    trainingDate: yup.date().required(t('common:validation.required')),
    trainingTime: yup.date().required(t('common:validation.needChoose')),
  })

  return { validationSchema }
}
