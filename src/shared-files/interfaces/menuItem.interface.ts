import { Id } from 'shared-files/types/appId.type'

export type MenuItem = {
  id: Id
  name: string
  icon?: React.ReactElement
  link?: string
  items?: MenuItem[]
  onClick?: (...args: any[]) => void
}
