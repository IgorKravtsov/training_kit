import * as yup from 'yup'

export const useLoginValidation = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Це не є правильною поштою')
      .required('Це поле має бути заповнено'),
    password: yup
      .string()
      .min(1, 'Мінімальне кол-во символів - 1')
      .required('Це поле має бути заповнено'),
    organization: yup.mixed().required('Це поле має бути вибране'),
  })
  return { validationSchema }
}
