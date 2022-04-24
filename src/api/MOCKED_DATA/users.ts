import { PublicAppUserDto } from 'api/user/types'
import { generateId } from 'utils'
export const mocked_trainers: PublicAppUserDto[] = [
  {
    uid: generateId(),
    displayName: 'Максимов Максим',
    email: 'maksim@gmail.com',
  },
  {
    uid: generateId(),
    displayName: 'Максимов Денис',
    email: 'denis@gmail.com',
  },
  {
    uid: generateId(),
    displayName: 'Кондратов Денис',
    email: 'kondratov@gmail.com',
  },
  {
    uid: generateId(),
    displayName: 'Запара Евгений',
    email: 'zapara@gmail.com',
  },
  {
    uid: generateId(),
    displayName: 'Сотников Юрий',
    email: 'sotinikov@gmail.com',
  },
]
