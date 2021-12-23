import i18next from 'i18next';
import { initReactI18next  } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend"

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
//   lng: 'zh', // if you're using a language detector, do not define the lng option
// order and from where user language should be detected
detection:{
  supportedLngs:['en','cn'],
  order: ['path', 'localStorage', 'cookies', 'htmlTag', 'subdomain'],
  caches: ['cookie'],
} ,
  fallbackLng:"en",
  debug: true,
  backend: {
    loadPath: '../assets/locals/{{lng}}/translation.json',
  },
  react: {useSuspense: false}
})

export default i18next;