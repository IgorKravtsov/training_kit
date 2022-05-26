import { PublicAppUserDto } from 'api/user/types'
import { Id } from 'shared-files/types'

export interface Gym {
  id: Id
  title: string
  address: string
  img?: string
  trainers?: PublicAppUserDto
}
