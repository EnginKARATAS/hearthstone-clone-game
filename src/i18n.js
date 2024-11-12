import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { cardTranslations } from "./i18n/cardTranslations";

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
            "Known for his ability to keep projects alive and continuously online, this character protects his projects like a shield with various CI/CD spells. He is a legendary hacker who even connected his car to code in the software world. He works like a software workshop with his .NET Core spells and Next.js abilities as the master of code on GitHub.",
          "mustafa-pack":
            "Drawing inspiration from the enchanted shimmer of the night sky, the loyalty of faithful friends, and the wisdom of water, this character defeats opponents with intelligence and patience. This character brings both nostalgia and innovation to the table throughout the game. Even ordinary moments are transformed into game-changing moments.",
          "jaina-pack":
            "Jaina Proudmoore is a fictional character who appears in the Warcraft series of video games by Blizzard Entertainment. Within the games, she is the most powerful sorceress alive. She is currently Lord Admiral, ruler of the Kul Tiras kingdom. Jaina was formerly the leader of the Kirin Tor, a faction of mages ruling over the city of Dalaran.",
          "ahmet-pack":
            "If this character was a music playlist, it would be on shuffle. He travels intercontinental every day. He's also pretty good at understanding robot language. Don't be too surprised if he suddenly bursts into laughter. His cards are decent in their own way. I think you should give it a try. Maybe thanks to these cards, you'll get your own latest model starship rocket. Why shouldn't you have one when everyone else does?",
        },
        player1: "Your Character",
        player2: "Your Enemy",
        thisGameIsFanMade:
          "This is a completely open source game developed similar to Blizzard Entertainment's 'Hearthstone' game, but the behavior of the cards differs in some aspects.",
        thankYouForPlaying: "Thank you for playing",
        bigSurpriseCounter: "Big Surprise Counter",
        bigSurprise: "Big Surprise",
        nextPrize: "Play 10 more turns to get the next prize",
        playAgain: "Play Again",
        waitFor7SecondsToGoToSecretLevel:
          "Wait for 7 seconds to go to secret level",
        theGameHasComeToAnEnd:
          "The game has come to an end. Thank you for my friends for their contributions with sending their character packages.",
        thankYouFor:
          "In case of sufficient demand for the game, it was developed in a way that could become a unique game with various modes by separating from the 'Hearthstone' identity.",
        sendingMeTheCardPackages:
          "The game currently does not heavily utilize backend services. However, the game's outcome can be greatly improved by using socket architecture or backend services. The game's development process will continue if there are positive comments.",
        developmentTechnologies:
          "Technologies used during game development: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
        developer: "This game was developed by Engin Karataş.",
        playWithComputer: "Against Computer",
        adventureMode: "Adventure Mode",
        adventureModeText: "Adventure Mode (Coming Soon)",
        goBack: "Go Back",
        selectGameMode: "Select Game Mode",
        staticTexts: {
          aboutTitle: "About",
          gameDescription:
            "This is a completely open source game developed similar to Blizzard Entertainment&apos;s &apos;Hearthstone&apos; game, but the behavior of the cards differs in some aspects.",
          futurePlans:
            "In case of sufficient demand for the game, it was developed in a way that could become a unique game with various modes by separating from the &apos;Hearthstone&apos; identity.",
          technicalDetails:
            "The game currently does not heavily utilize backend services. However, the game&apos;s outcome can be greatly improved by using socket architecture or backend services. The game&apos;s development process will continue if there are positive comments.",
          technologies:
            "Technologies used during game development: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
          developer: "This game was developed by Engin Karataş.",
        },
        githubLink: "Click and Go to Open Source Github Codes",
        cards: cardTranslations.en.cards,
        loading: "Loading",
        cloneAppMadeWithLove: "Clone app made with love",
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
            "Projeleri yaşatma ve sürekli çevirim içi tutma yeteneğiyle tanınan bu karakter, çeşitli CI/CD büyüleriyle projelerini adeta kalkan gibi korur. Yazılım dünyasında arabasını bile koda bağlayarak efsane olmuş bir hacker’dır. Evrendeki tüm kodların efendisi..NET Core büyüleri ve Next.js yetenekleriyle adeta bir yazılım atölyesi gibi çalışır.",
          "mustafa-pack":
            "Gece gökyüzünün efsunlu parıltısından, sadık dostların sadakati ve suyun bilgeliğinden ilham alarak rakiplerini zekası ve sabrıyla alt eder. Oyun boyunca masaya hem nostalji hem de yenilik katan bu karakter. Sıradan anları bile savaşın kaderini değiştirecek anlara dönüştürüyor. Her oyunda şans sizinle, zira bu karakter geçmişiyle her daim bir adım önde.",
          "jaina-pack":
            "Jaina Proudmoore, Blizzard Entertainment'ın Warcraft serisi video oyunlarında yer alan kurgusal bir karakterdir. Oyunlarda, yaşayan en güçlü büyücüdür. Şu anda Kul Tiras krallığının hükümdarı Lord Admiral'dir. Jaina eskiden Dalaran şehrini yöneten bir büyücü grubu olan Kirin Tor'un lideriydi.",
          "ahmet-pack":
            "Bu karakter eğer bir müzik listesi olsaydı karışık olurdu. Her gün kıtalararası seyahat yapar. Yazılım dünyasında robotların dilinden anlamakta da fena değildir. Bir de durduk yere kahkaha atarsa fazla şaşırma. Kartları da kendi çapında iyidir. Bence bi dene. Belki bu kartlar sayesinde senin de son model starship roketin olur. Herkesin varken senin niye olmasın?",
        },
        player1: "Karakterin",
        player2: "Düşmanın",
        thisGameIsFanMade:
          "Tamamen açık kaynak 'Hearthstone' Oyun şu anda Blizzard Entertainment 'Hearthstone' oyununa benzer şekilde geliştirilmiştir fakat kartların davranışı bazı noktalarda farklılıklar göstermektedir.",
        thankYouForPlaying: "Oyunu oynadığınız için teşekkürler",
        bigSurpriseCounter: "Büyük Ödül Sayacı",
        bigSurprise: "Büyük Şutun Ödülü",
        nextPrize: "Bir sonraki ödül için 10 tur oynayınız.",
        playAgain: "Tekrar Oyna",
        waitFor7SecondsToGoToSecretLevel:
          "7 saniye bekleyiniz, gizli seviyeye gideceksiniz.",
        theGameHasComeToAnEnd: "Oyun sona erdi.",
        thankYouFor:
          "Oyuna yeterli talep olduğu durumda 'Hearthstone' kimliğinden ayrılıp Çeşitli modlara sahip olabilen benzersiz bir oyun olabilecek şekilde geliştirildi.",
        sendingMeTheCardPackages:
          "Oyun şu an için backend servislerinden yoğun bir şekilde yararlanmıyor. Fakat socket mimarisi veya backend servisleri kullanılarak oyunun sonucu büyük oranda geliştirilebilir. Oyunun geliştirme süreci olumlu yorumlar olduğu durumda devam edecektir.",
        developmentTechnologies:
          "Oyunun geliştirilmesi sırasında kullanılan teknolojiler: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
        developer: "Bu oyun Engin Karataş tarafından geliştirildi.",
        playWithComputer: "Bilgisayara Karşı",
        adventureMode: "Macera Modu",
        adventureModeText: "Macera Modu (Yakında)",
        goBack: "Geri Dön",
        selectGameMode: "Oyun Modu Seçin",
        staticTexts: {
          aboutTitle: "Hakkında",
          gameDescription:
            "Tamamen açık kaynak &apos;Hearthstone&apos; Oyun şu anda Blizzard Entertainment &apos;Hearthstone&apos; oyununa benzer şekilde geliştirilmiştir fakat kartların davranışı bazı noktalarda farklılıklar göstermektedir.",
          futurePlans:
            "Oyuna yeterli talep olduğu durumda &apos;Hearthstone&apos; kimliğinden ayrılıp Çeşitli modlara sahip olabilen benzersiz bir oyun olabilecek şekilde geliştirildi.",
          technicalDetails:
            "Oyun şu an için backend servislerinden yoğun bir şekilde yararlanmıyor. Fakat socket mimarisi veya backend servisleri kullanılarak oyunun sonucu büyük oranda geliştirilebilir. Oyunun geliştirme süreci olumlu yorumlar olduğu durumda devam edecektir.",
          technologies:
            "Oyunun geliştirilmesi sırasında kullanılan teknolojiler: SOLID, React, Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization",
          developer: "Bu oyun Engin Karataş tarafından geliştirildi.",
        },
        githubLink: "Açık Kaynak Github Kodlarına Git",
        cards: cardTranslations.tr.cards,
        loading: "Yükleniyor",
        cloneAppMadeWithLove: "Sevgiyle yapılan benzersiz hearthstone web klon oyunu",
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
