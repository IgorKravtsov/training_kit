import { Characteristic, CharacteristicType } from 'api/characteristics/characteristic.types'
import { generateId } from 'utils/generateId'

export const mocked_characteristics: Characteristic[] = [
  {
    id: generateId(),
    title: 'Сила удару',
    type: CharacteristicType.Power,
  },
  {
    id: generateId(),
    title: 'Швидкість удару',
    type: CharacteristicType.Speed,
  },
  {
    id: generateId(),
    title: 'Витривалість',
    type: CharacteristicType.Endurance,
  },
]
