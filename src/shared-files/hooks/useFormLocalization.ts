import { useTranslation } from 'react-i18next'
import { ru, uk, enGB } from 'date-fns/locale'
import { LanguageType } from 'shared-files/enums'

export const useFormLocalization = () => {
  const { i18n } = useTranslation()

  const getLocalization = () => {
    switch (i18n.language) {
      case LanguageType.Ukrainian:
        return uk

      case LanguageType.English:
        return enGB

      case LanguageType.Russian:
        return ru

      default:
        return uk
    }
  }

  return { locale: getLocalization() }
}
