import { GymTraining, Training } from 'api/training/types'
import { generateId } from 'utils'
import { mocked_trainers } from './users'

export const mocked_trainings: Training[] = [
  {
    id: generateId(),
    title: 'Ката (Средняя группа)',
    trainingDate: new Date(),
    trainingTime: '16:30',
    trainer: mocked_trainers[0],
    gym: {
      id: generateId(),
      address: 'ул. Пушкина 25',
      title: 'Dodjo Den-Max',
    },
  },
  {
    id: generateId(),
    title: 'Кумите (Средняя группа)',
    trainingDate: new Date('Mon Apr 25 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
    trainingTime: '12:00',
    trainer: mocked_trainers[0],
    gym: {
      id: generateId(),
      address: 'ул. Пушкина 25',
      title: 'Dodjo Den-Max',
    },
  },
  {
    id: generateId(),
    title: 'Средняя группа',
    trainingDate: new Date('Wed Apr 27 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
    trainingTime: new Date('Wed Apr 27 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
    // trainingTime: '17:00',
    trainer: mocked_trainers[0],
    gym: {
      id: generateId(),
      address: 'ул. Пушкина 25',
      title: 'Dodjo Den-Max',
    },
  },
  {
    id: generateId(),
    title: 'Ката (Старшая группа)',
    trainingDate: new Date(),
    trainingTime: new Date(),
    // trainingTime: '17:00',
    trainer: mocked_trainers[0],
    gym: {
      id: generateId(),
      address: 'ул. Маяковского 12а',
      title: 'Sokol Dodjo',
    },
  },
]

export const mocked_gym_trainings: GymTraining[] = [
  {
    gym: {
      id: generateId(),
      address: 'ул. Пушкина 25',
      title: 'Dodjo Den-Max',
      img: 'https://media.istockphoto.com/photos/gym-background-fitness-weight-equipment-on-empty-dark-floor-picture-id1213615970?k=20&m=1213615970&s=612x612&w=0&h=S2Ny5JNrAlcpZ_0mt76CKAwARqvJN5glvHpB9fD3DA0=',
    },
    trainings: [
      {
        id: generateId(),
        title: 'Ката (Средняя группа)',
        trainingDate: new Date(),
        // trainingTime: '16:30',
        trainingTime: new Date('Mon Apr 25 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
        trainer: mocked_trainers[1],
      },
      {
        id: generateId(),
        title: 'Средняя группа',
        trainingDate: new Date('Wed Apr 27 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
        // trainingTime: '17:00',
        trainingTime: new Date(),
        trainer: mocked_trainers[0],
      },
    ],
  },
  {
    gym: {
      id: generateId(),
      address: 'ул. Маяковского 12а',
      title: 'Sokol Dodjo',
      img: 'https://thumbs.dreamstime.com/b/gym-24699087.jpg',
    },
    trainings: [
      {
        id: generateId(),
        title: 'Средняя группа',
        trainingDate: new Date('Wed Apr 27 2022 21:09:33 GMT+0300 (Восточная Европа, летнее время)'),
        // trainingTime: '17:00',
        trainingTime: new Date(),
        trainer: mocked_trainers[2],
      },
    ],
  },
]
