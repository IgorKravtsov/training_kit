import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

export const useCreateAbonementValidation = () => {
  const { t } = useTranslation(['common'])

  const validationSchema = yup.object({
    title: yup.string().trim().required(t('common:validation.required')),
    gyms: yup
      .array()
      .of(yup.mixed())
      .min(1, t('common:validation.required'))
      .required(t('common:validation.required')),
    days: yup
      .number()
      .min(1, t('common:validation.min', { num: 1 }))
      .typeError(t('common:validation.required')),
    trainings: yup.number().min(1, t('common:validation.min', { num: 1 })),
    price: yup.number().required(t('common:validation.required')),
  })

  return { validationSchema }
}
