import { Abonement } from 'api/abonements/abonements.types'
import { generateId } from 'utils'

export const mocked_abonements: Abonement[] = [
  {
    id: generateId(),
    title: 'Месячний Покровский стандарт',
  },
  {
    id: generateId(),
    title: 'Недельный Покровский стандарт',
  },
]
