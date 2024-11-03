import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to the game",
          start: "Start Game",
          settings: "Settings",
          contact: "Contact",
          characterDescription: "Lorem ipsum  adipisicing elit. Natus dolore accusamus fugiat repudiandae quasi nisi harum dignissimos consequuntur optio earum voluptates sunt id quibusdam, ratione consequatur incidunt, explicabo ea aperiam, tenetur sequi? Saepe, qui dolorum accusamus laboriosam maxime excepturi doloremque cupiditate.",
        },
      },
      tr: {
        translation: {
          welcome: "Oyuna hoş geldiniz",
          start: "Oyunu Başlat",
          settings: "Ayarlar",
          contact: "İletişim",
          characterDescription: "Lorem ipsum  adipisicing elit. Natus dolore accusamus fugiat repudiandae quasi nisi harum dignissimos consequuntur optio earum voluptates sunt id quibusdam, ratione consequatur incidunt, explicabo ea aperiam, tenetur sequi? Saepe, qui dolorum accusamus laboriosam maxime excepturi doloremque cupiditate.",
        },
      },
    },
    lng: "tr",  
    fallbackLng: "en",  
    interpolation: {
      escapeValue: false,  
    },
  });

export default i18n; 