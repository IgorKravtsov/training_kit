import { createContext } from 'react'

export const DrawerContext = createContext<{ toggleFunc: (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => void }>({
  toggleFunc: () => {},
})
