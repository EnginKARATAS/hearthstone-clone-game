import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to the game",
        credits: "Credits",
        start: "Start Game",
        settings: "Settings",
        contact: "Contact",
        selectCharacter: "Select Character",
        selectLanguage: "Select Language",
        characterDescription: {
            "engin-pack":
              "A character focused on armor gain, their cards may not deal much damage, but they can distract the opponent and deal damage from many angles. If the table is not empty, luck will be on your side.",
            "yavuz-pack":
              "Yavuz, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
          },
      },
    },
    tr: {
      translation: {
        welcome: "Oyuna hoş geldiniz",
        credits: "Geliştiriciler",
        start: "Oyunu Başlat",
        settings: "Ayarlar",
        selectLanguage: "Dil Seçin",
        contact: "Iletişim",
        selectCharacter: "Karakter Seçin",
        characterDescription: {
          "engin-pack":
            "Zırh kazanımı odaklı bir karakter, kartları da her ne kadar az hasar verse de, rakibi oyalayarak bir çok yönden hasar verir. Masayı boş olmazsa şans sizden yana olacak.",
          "yavuz-pack":
            "Yavuz, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
        },
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
