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
          player1: "Your Character",
          player2: "Your Enemy",
          thisGameIsFanMade: "This game is a fan-made project inspired by the popular card game Hearthstone, developed by Blizzard Entertainment. It is not affiliated with, endorsed by, or sponsored by Blizzard Entertainment",
          thankYouForPlaying: "Thank you for playing",
          bigSurpriseCounter: "Big Surprise Counter",
          bigSurprise: "Big Surprise",
          nextPrize: "Play 10 more turns to get the next prize",
          playAgain: "Play Again",
          waitFor7SecondsToGoToSecretLevel: "Wait for 7 seconds to go to secret level",
          theGameHasComeToAnEnd: "The game has come to an end.",
          thankYouFor: "Thank you for",
          sendingMeTheCardPackages: "sending me the card packages(15cards!).",
          yavuzCeliker: "Yavuz Çeliker",
          mustafaOzkan: "Mustafa Özkan",
          xxx: "XXX",
          yyy: "YYY",
          ttt: "TTT",
          zzz: "ZZZ",
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
            "Zırh kazanımı odaklı bir karakter, kartları da her ne kadar az hasar verse de, rakibi oyalayarak bir çok yönden hasar verir. Masayı boş bırakmayın, şans sizden yana olacak.",
          "yavuz-pack":
            "Yavuz, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
        },
        player1: "Karakterin",
        player2: "Düşmanın",
        thisGameIsFanMade: "Bu oyun, Blizzard Entertainments tarafından geliştirilmiş olan popüler kart oyunu Hearthstone'u esin alarak yapılmış bir hayal ürünüdür. Blizzard Entertainments ile bağlantılı değildir, onaylanmamıştır veya desteklenmemiştir.",
        thankYouForPlaying: "Oyunu oynadığınız için teşekkürler",
        bigSurpriseCounter: "Büyük Şutun Sayacı",
        bigSurprise: "Büyük Şutun Ödülü",
        nextPrize: "Bir sonraki ödül için 10 tur oynayınız.",
        playAgain: "Tekrar Oynat",
        waitFor7SecondsToGoToSecretLevel: "7 saniye bekleyiniz, gizli seviyeye gideceksiniz.",
        theGameHasComeToAnEnd: "Oyun sona erdi.",
        thankYouFor: "",
        sendingMeTheCardPackages: "Oyun içi kart paketlerini hazırladıkları için arkadaşlarıma teşekkür ediyorum(15 kart!).",
        yavuzCeliker: "Yavuz Çeliker",
        mustafaOzkan: "Mustafa Özkan",
        xxx: "XXX",
        yyy: "YYY",
        ttt: "TTT",
        zzz: "ZZZ",
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
