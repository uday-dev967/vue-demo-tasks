import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'

function loadLocaleMessages() {
  const locales = [{ en: en }, {ja: ja}]
  const messages = {}
  locales.forEach((lang) => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: loadLocaleMessages(),
})
