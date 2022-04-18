import { Gym } from 'api/gym/gym.types'
import { generateId } from 'utils'

export const mocked_gyms: Gym[] = [
  {
    id: generateId(),
    address: 'ул. Пушкина, 12',
    title: 'Dodjo Den Max Покровск',
  },
  {
    id: generateId(),
    address: 'ул. Некрасова, 126',
    title: 'Sokol Dodjo',
  },
]
