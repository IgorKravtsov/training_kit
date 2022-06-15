import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

export const useRegisterValidation = () => {
  const { t } = useTranslation(['common'])

  const validationSchema = yup.object({
    name: yup.string().trim().required(t('common:validation.required')),
    lastName: yup.string().trim().required(t('common:validation.required')),
    email: yup
      .string()
      .email(t('common:validation.invalidEmail'))
      .required(t('common:validation.required')),
    organization: yup.mixed().required(t('common:validation.needChoose')),
    birthday: yup.date().required(t('common:validation.required')),
    password: yup
      .string()
      .min(1, t('common:validation.min', { num: 1 }))
      .required(t('common:validation.required')),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password'), null], t('common:validation.confirmPass'))
      .required(t('common:validation.required')),
  })

  return { validationSchema }
}
