import { Id } from 'shared-files/types'

interface WithId {
  id: Id
}

export const getIdFromArray = (obj: WithId) => {
  return obj.id
}
