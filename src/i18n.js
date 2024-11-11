import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to the game",
        credits: "About",
        start: "Start Game",
        settings: "Settings",
        contact: "Contact",
        selectCharacter: "Select Character",
        selectLanguage: "Select Language",
        characterDescription: {
          "engin-pack":
            "A character focused on armor gain, his cards, although they do little damage, do a lot of damage by stalling the opponent. Don't leave the table empty, luck will be on your side. He has been interested in software since 2018. He has more than 150 projects on Github. He gave his soul to Object Oriented Programming.",
          "yavuz-pack":
            "Yavuz, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
          "mustafa-pack":
            "Mustafa, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
          "jaina-pack":
            "Jaina Proudmoore is a fictional character who appears in the Warcraft series of video games by Blizzard Entertainment. Within the games, she is the most powerful sorceress alive. She is currently Lord Admiral, ruler of the Kul Tiras kingdom. Jaina was formerly the leader of the Kirin Tor, a faction of mages ruling over the city of Dalaran.",
        },
        player1: "Your Character",
        player2: "Your Enemy",
        thisGameIsFanMade: "This is a completely open source game developed similar to Blizzard Entertainment's 'Hearthstone' game, but the behavior of the cards differs in some aspects.",
        thankYouForPlaying: "Thank you for playing",
        bigSurpriseCounter: "Big Surprise Counter",
        bigSurprise: "Big Surprise",
        nextPrize: "Play 10 more turns to get the next prize",
        playAgain: "Play Again",
        waitFor7SecondsToGoToSecretLevel:
          "Wait for 7 seconds to go to secret level",
        theGameHasComeToAnEnd: "The game has come to an end.",
        thankYouFor: "In case of sufficient demand for the game, it was developed in a way that could become a unique game with various modes by separating from the 'Hearthstone' identity.",
        sendingMeTheCardPackages: "The game currently does not heavily utilize backend services. However, the game's outcome can be greatly improved by using socket architecture or backend services. The game's development process will continue if there are positive comments.",
        developmentTechnologies: "Technologies used during game development: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
        developer: "This game was developed by Engin Karataş.",
        yavuzCeliker: "Yavuz Çeliker",
        mustafaOzkan: "Mustafa Özkan",
        xxx: "XXX",
        yyy: "YYY",
        ttt: "TTT",
        zzz: "ZZZ",
        playWithComputer: "Against Computer",
        adventureMode: "Adventure Mode",
        adventureModeText: "Adventure Mode (Coming Soon)",
        goBack: "Go Back",
        selectGameMode: "Select Game Mode",
        staticTexts: {
          aboutTitle: "About",
          gameDescription: "This is a completely open source game developed similar to Blizzard Entertainment&apos;s &apos;Hearthstone&apos; game, but the behavior of the cards differs in some aspects.",
          futurePlans: "In case of sufficient demand for the game, it was developed in a way that could become a unique game with various modes by separating from the &apos;Hearthstone&apos; identity.",
          technicalDetails: "The game currently does not heavily utilize backend services. However, the game&apos;s outcome can be greatly improved by using socket architecture or backend services. The game&apos;s development process will continue if there are positive comments.",
          technologies: "Technologies used during game development: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
          developer: "This game was developed by Engin Karataş."
        }
      },
    },
    tr: {
      translation: {
        welcome: "Oyuna hoş geldiniz",
        credits: "Hakkında",
        start: "Oyunu Başlat", 
        settings: "Ayarlar",
        selectLanguage: "Dil Seçin",
        contact: "Iletişim",
        selectCharacter: "Karakter Seçin",
        characterDescription: {
          "engin-pack":
            "Zırh kazanımı odaklı bir karakter, kartları da her ne kadar az hasar verse de, rakibi oyalayarak bir çok yönden hasar verir. Masayı boş bırakmayın, şans sizden yana olacak. 2018den beri yazılım ile ilgileniyor. Githubda 150den fazla projesi var. Nesne Yönelimli Programlamaya ruhunu vermiş.",
          "yavuz-pack":
            "Yavuz, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
          "mustafa-pack":
            "Mustafa, kartlarıyla kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir. Kısa mesafede kendini koruyan bir karakterdir.",
          "jaina-pack":
            "Jaina Proudmoore, Blizzard Entertainment'ın Warcraft serisi video oyunlarında yer alan kurgusal bir karakterdir. Oyunlarda, yaşayan en güçlü büyücüdür. Şu anda Kul Tiras krallığının hükümdarı Lord Admiral'dir. Jaina eskiden Dalaran şehrini yöneten bir büyücü grubu olan Kirin Tor'un lideriydi.",
        },
        player1: "Karakterin",
        player2: "Düşmanın",
        thisGameIsFanMade: "Tamamen açık kaynak 'Hearthstone' Oyun şu anda Blizzard Entertainment 'Hearthstone' oyununa benzer şekilde geliştirilmiştir fakat kartların davranışı bazı noktalarda farklılıklar göstermektedir.",
        thankYouForPlaying: "Oyunu oynadığınız için teşekkürler",
        bigSurpriseCounter: "Büyük Ödül Sayacı",
        bigSurprise: "Büyük Şutun Ödülü",
        nextPrize: "Bir sonraki ödül için 10 tur oynayınız.",
        playAgain: "Tekrar Oyna",
        waitFor7SecondsToGoToSecretLevel:
          "7 saniye bekleyiniz, gizli seviyeye gideceksiniz.",
        theGameHasComeToAnEnd: "Oyun sona erdi.",
        thankYouFor: "Oyuna yeterli talep olduğu durumda 'Hearthstone' kimliğinden ayrılıp Çeşitli modlara sahip olabilen benzersiz bir oyun olabilecek şekilde geliştirildi.",
        sendingMeTheCardPackages: "Oyun şu an için backend servislerinden yoğun bir şekilde yararlanmıyor. Fakat socket mimarisi veya backend servisleri kullanılarak oyunun sonucu büyük oranda geliştirilebilir. Oyunun geliştirme süreci olumlu yorumlar olduğu durumda devam edecektir.",
        developmentTechnologies: "Oyunun geliştirilmesi sırasında kullanılan teknolojiler: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
        developer: "Bu oyun Engin Karataş tarafından geliştirildi.",
        yavuzCeliker: "Yavuz Çeliker",
        mustafaOzkan: "Mustafa Özkan",
        xxx: "XXX",
        yyy: "YYY", 
        ttt: "TTT",
        zzz: "ZZZ",
        playWithComputer: "Bilgisayara Karşı",
        adventureMode: "Macera Modu",
        adventureModeText: "Macera Modu (Yakında)",
        goBack: "Geri Dön",
        selectGameMode: "Oyun Modu Seçin",
        staticTexts: {
          aboutTitle: "Hakkında",
          gameDescription: "Tamamen açık kaynak &apos;Hearthstone&apos; Oyun şu anda Blizzard Entertainment &apos;Hearthstone&apos; oyununa benzer şekilde geliştirilmiştir fakat kartların davranışı bazı noktalarda farklılıklar göstermektedir.",
          futurePlans: "Oyuna yeterli talep olduğu durumda &apos;Hearthstone&apos; kimliğinden ayrılıp Çeşitli modlara sahip olabilen benzersiz bir oyun olabilecek şekilde geliştirildi.",
          technicalDetails: "Oyun şu an için backend servislerinden yoğun bir şekilde yararlanmıyor. Fakat socket mimarisi veya backend servisleri kullanılarak oyunun sonucu büyük oranda geliştirilebilir. Oyunun geliştirme süreci olumlu yorumlar olduğu durumda devam edecektir.",
          technologies: "Oyunun geliştirilmesi sırasında kullanılan teknolojiler: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
          developer: "Bu oyun Engin Karataş tarafından geliştirildi."
        }
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
