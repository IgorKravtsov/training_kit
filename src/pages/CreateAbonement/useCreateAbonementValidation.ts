import * as yup from 'yup'

export const useCreateAbonementValidation = () => {
  const validationSchema = yup.object({
    title: yup.string().trim().required('Це поле має бути заповнено'),
    gyms: yup
      .array()
      .of(yup.mixed())
      .min(1, 'Це поле має бути заповнено')
      .required('Це поле має бути заповнено'),
    days: yup
      .number()
      .min(1, 'Мінімальне значення цього поля - 1')
      .typeError('Це поле має бути заповнено'),
    trainings: yup.number().min(1, 'Мінімальне значення цього поля - 1'),
    price: yup.number().required('Це поле має бути заповнено'),
  })

  return { validationSchema }
}
