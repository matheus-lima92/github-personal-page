import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'translations/en';
import pt from 'translations/pt';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en,
    pt,
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "pt",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            transSupportBasicHtmlNodes: true
        }
    });

export default i18n;