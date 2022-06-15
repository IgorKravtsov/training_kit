import i18next from 'i18next'
import Backend from 'i18next-http-backend'
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'
import { LanguageType } from 'shared-files/enums'

// const Resource_Path =
//   process.env.NODE_ENV == 'development'
//     ? '/locales/{{lng}}/{{ns}}.json'
//     : process.env.REACT_APP_BASE_URL + '/ui/locales/{{lng}}/{{ns}}.json'
const loadPath = '/locales/{{lng}}/{{ns}}.json'

i18next
  .use(initReactI18next)
  .use(Backend)
  //.use(LanguageDetector)

  .init({
    backend: { loadPath },
    supportedLngs: [
      LanguageType.Ukrainian,
      LanguageType.English,
      LanguageType.Russian,
    ],
    nonExplicitSupportedLngs: false,
    ns: [
      'register',
      'companySettings',
      'companydetails',
      'payrollsettings',
      'common',
      'validation',
      'negativeadjustment',
      'payStubMemos',
      'secureuploadfolder',
      'fileupload',
      'taxsettings',
      'workercompensation',
      'invoices',
      'closeAccounts',
      'recordOfEmployment',
      'userAccounts',
      'payrollreports',
      'header',
      'addons',
      'notifications',
      'dashboard',
      'bankDetails',
    ],
    defaultNS: 'common',
    // interpolation: {
    //   escapeValue: false,
    // },
    fallbackLng: LanguageType.Ukrainian,
    lowerCaseLng: true,
  })

export default i18next
