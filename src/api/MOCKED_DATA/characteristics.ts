import { Characteristic, CharacteristicType } from 'api/characteristic/types'
import { generateId } from 'utils/generateId'

export const randomizeCharacteristicData = (): number[] => {
  const res = []
  const quantity = Math.random() * 30 + 8
  for (let i = 0; i < quantity; i++) {
    res.push(Math.random() * 100 + 79)
  }
  return res
}

export const mocked_characteristics: Characteristic[] = [
  {
    id: generateId(),
    title: 'Сила удару',
    type: CharacteristicType.Power,
    data: {
      labels: ['Січень', 'Лютий', 'Март', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень'],
      values: randomizeCharacteristicData(),
    },
  },
  {
    id: generateId(),
    title: 'Швидкість удару',
    type: CharacteristicType.Speed,
    data: {
      labels: ['Січень', 'Лютий', 'Март', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень'],
      values: randomizeCharacteristicData(),
    },
  },
  {
    id: generateId(),
    title: 'Витривалість',
    type: CharacteristicType.Endurance,
  },
]
