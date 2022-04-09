export type MenuItem = {
  id: string
  name: string
  icon: React.ReactElement
  link: string
  items?: MenuItem[]
}
