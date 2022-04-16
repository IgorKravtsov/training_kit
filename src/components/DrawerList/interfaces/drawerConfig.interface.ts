import { Id } from 'shared-files/types/appId.type'

export interface DrawerCharacteristic {
  id: Id
  title: string
}

export interface DrawerConfig {
  characteristics: DrawerCharacteristic[]
}
