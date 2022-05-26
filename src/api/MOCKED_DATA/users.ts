import { PublicAppUserDto } from 'api/user/types'
import { generateId } from 'utils'
export const mocked_trainers: PublicAppUserDto[] = [
  {
    id: generateId(),
    displayName: 'Максимов Максим',
    email: 'maksim@gmail.com',
  },
  {
    id: generateId(),
    displayName: 'Максимов Денис',
    email: 'denis@gmail.com',
  },
  {
    id: generateId(),
    displayName: 'Кондратов Денис',
    email: 'kondratov@gmail.com',
  },
  {
    id: generateId(),
    displayName: 'Запара Евгений',
    email: 'zapara@gmail.com',
  },
  {
    id: generateId(),
    displayName: 'Сотников Юрий',
    email: 'sotinikov@gmail.com',
  },
]
