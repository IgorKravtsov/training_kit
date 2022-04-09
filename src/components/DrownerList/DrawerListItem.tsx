import React from 'react'

import CollapsableListItem from './components/CollapsableListItem'
import SimpleListItem from './components/SimpleListItem'

import { MenuItem } from 'shared-files/interfaces/menuItem'

export interface DrowerListItemProps {
  item: MenuItem
}

const DrowerListItem: React.FC<DrowerListItemProps> = ({ item }): React.ReactElement => {
  const { items } = item

  return <>{items && items.length > 0 ? <CollapsableListItem item={item} /> : <SimpleListItem item={item} />}</>
}

export default DrowerListItem
