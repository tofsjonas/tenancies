import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const supported_i18n_languages = ['en', 'sv']

let initial_language = localStorage.getItem('language') || 'en'

if (supported_i18n_languages.indexOf(initial_language) === -1) {
  initial_language = 'en'
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: initial_language,
  resources: {
    en: {
      translations: require('./locales/en/translations.json'),
    },
    sv: {
      translations: require('./locales/sv/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
})

i18n.languages = ['en', 'sv']

export default i18n
