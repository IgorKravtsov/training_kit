import { Abonement, LearnerAbonement } from 'api/abonements/types'
import { generateId } from 'utils'

export const mocked_abonements: Abonement[] = [
  {
    id: generateId(),
    title: 'Месячний Покровский стандарт',
    price: 200,
    //   options: [
    //     {
    //       id: generateId(),
    //       name: 'Цена',
    //       value: '600',
    //     },
    //     {
    //       id: generateId(),
    //       name: 'Кол-во дней',
    //       value: '30',
    //     },
    //     {
    //       id: generateId(),
    //       name: 'Кол-во тренеровок',
    //       value: '30',
    //     },
    //   ],
    // },
    // {
    //   id: generateId(),
    //   title: 'Недельный Покровский стандарт',
    //   options: [
    //     {
    //       id: generateId(),
    //       name: 'Цена',
    //       value: '30',
    //     },
    //     {
    //       id: generateId(),
    //       name: 'Кол-во дней',
    //       value: '7',
    //     },
    //     {
    //       id: generateId(),
    //       name: 'Кол-во тренеровок',
    //       value: '3',
    //     },
    //   ],
  },
]

export const mocked_abonementsWithUserData: LearnerAbonement[] = [
  {
    id: generateId(),
    // title: 'Месячний Покровский стандарт',
    abonement: {
      price: 300,
      id: 1,
      title: '',
      amountDays: 4,
      amountTrainings: 23,
    },
    startDate: new Date(),
    daysLeft: 16,
    endDate: new Date(),
    trainingsLeft: 23,
    // options: [
    //   {
    //     id: generateId(),
    //     name: 'Цена',
    //     value: '600',
    //   },
    //   {
    //     id: generateId(),
    //     name: 'Кол-во дней',
    //     value: '30',
    //   },
    //   {
    //     id: generateId(),
    //     name: 'Кол-во тренеровок',
    //     value: '30',
    //   },
    // ],
  },
]
