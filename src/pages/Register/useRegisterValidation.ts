import * as yup from 'yup'

export const useRegisterValidation = () => {
  const validationSchema = yup.object({
    name: yup.string().trim().required('Це поле має бути заповнено'),
    lastName: yup.string().trim().required('Це поле має бути заповнено'),
    email: yup
      .string()
      .email('Це не є правильною поштою')
      .required('Це поле має бути заповнено'),
    organization: yup.mixed().required('Це поле має бути обрано'),
    birthday: yup.date().required('Це поле має бути заповнено'),
    password: yup
      .string()
      .min(1, 'Мінімальне кол-во символів - 1')
      .required('Це поле має бути заповнено'),
    confirmPass: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'Це поле має співпадати з полем паролю',
      )
      .required('Це поле має бути заповнено'),
  })

  return { validationSchema }
}
