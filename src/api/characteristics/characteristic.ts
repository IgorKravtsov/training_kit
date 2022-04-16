import { Id } from 'shared-files/types/appId.type'
import { Characteristic } from './characteristic.types'
import { mocked_characteristics } from '../MOCKED_DATA/characteristics'

export const getUserCharacteristics = async (userId: Id): Promise<Characteristic[]> => {
  return Promise.resolve(mocked_characteristics)
}
