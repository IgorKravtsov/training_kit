import React from 'react'
import { useTranslation } from 'react-i18next'

import LanguageIcon from '@mui/icons-material/Language'

import { LanguageType } from 'shared-files/enums'
import { MenuItem } from 'shared-files/interfaces'
import { generateId } from 'utils'

import CollapsableListItem from './CollapsableListItem'
import { useHttpRequest } from 'shared-files/hooks'
import { UpdateLanguage } from 'api/user/user'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

const LangSwitcher: React.FC = (): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const { user } = useAuthContext()

  const updateLanguage = async (lang: LanguageType) => {
    await UpdateLanguage(user?.id || 0, { lang })
  }

  const changeLangMenuItem: MenuItem = {
    id: generateId(),
    name: t('sidebar:changeLang'),
    icon: <LanguageIcon />,
    items: [
      {
        id: generateId(),
        name: t('sidebar:ukr'),
        onClick() {
          i18n.changeLanguage(LanguageType.Ukrainian)
          updateLanguage(LanguageType.Ukrainian)
        },
      },
      {
        id: generateId(),
        name: t('sidebar:eng'),
        onClick() {
          i18n.changeLanguage(LanguageType.English)
          updateLanguage(LanguageType.English)
        },
      },
      {
        id: generateId(),
        name: t('sidebar:rus'),
        onClick() {
          i18n.changeLanguage(LanguageType.Russian)
          updateLanguage(LanguageType.Russian)
        },
      },
    ],
  }

  return <CollapsableListItem item={changeLangMenuItem} />
}

export default LangSwitcher
