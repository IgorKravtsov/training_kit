import React from 'react'
import { useTranslation } from 'react-i18next'

import LanguageIcon from '@mui/icons-material/Language'

import { LanguageType } from 'shared-files/enums'
import { MenuItem } from 'shared-files/interfaces'
import { generateId } from 'utils'

import CollapsableListItem from './CollapsableListItem'

const LangSwitcher: React.FC = (): React.ReactElement => {
  const { i18n } = useTranslation()

  const changeLangMenuItem: MenuItem = {
    id: generateId(),
    name: 'Змінити мову',
    icon: <LanguageIcon />,
    items: [
      {
        id: generateId(),
        name: 'Українська',
        onClick() {
          i18n.changeLanguage(LanguageType.Ukrainian)
        },
      },
      {
        id: generateId(),
        name: 'Англійська',
        onClick() {
          i18n.changeLanguage(LanguageType.English)
        },
      },
      {
        id: generateId(),
        name: 'Російська -> тьфу',
        onClick() {
          i18n.changeLanguage(LanguageType.Russian)
        },
      },
    ],
  }

  return <CollapsableListItem item={changeLangMenuItem} />
}

export default LangSwitcher
