import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['localStorage', 'cookie', 'querystring', 'navigator'],
            caches: ['localStorage', 'cookie'],
            lookupLocalStorage: 'i18nextLng',
            lookupCookie: 'i18next',
            cookieMinutes: 10080,
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;
