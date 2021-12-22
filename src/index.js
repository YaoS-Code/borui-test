import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend"

i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
//   lng: 'zh', // if you're using a language detector, do not define the lng option
// order and from where user language should be detected
detection:{
  supportedLngs:['ca','cn'],
  order: ['path', 'cookie', 'htmlTag', 'localStorage',  'subdomain'],
  caches: ['cookie'],
} ,

  debug: true,
  backend: {
    loadPath: '/assets/locals/{{lng}}/translation.json',
  },
  react: {useSuspense: false}

}, function(t) {
  // initialized and ready to go!
  document.getElementById('key').innerHTML = i18next.t('key');
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
