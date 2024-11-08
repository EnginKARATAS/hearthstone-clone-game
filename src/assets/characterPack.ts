import { Card } from "../types/Card.js";
export const characterPack: { [key: string]: Card[] } = {
  "jaina-pack": [
    {
      cardName: "Lamp Lighter",
      cardSkills: [{ type: "DealRandomEnemy", amount: 1 }],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      image: "lamp_lighter",
      cardDescription: "When play this card, deal 1 damage to random enemy.",
      cardType: "minion",
      cardImageName: "lamp_lighter",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Tripplewick Trickster",
      cardSkills: [{ type: "DealRandomEnemy", amount: 2 }],
      cardCost: 4,
      cardAttack: 2,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      image: "tripplewick_trickster",
      cardDescription: "When play this card, deal 2 damage to random enemy.",
      cardType: "minion",
      cardImageName: "tripplewick_trickster",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Saloon Brewmaster",
      cardSkills: [{ type: "ReturnToHandAndGiveHealth", amount: 2 }],
      cardCost: 2,
      cardAttack: 2,
      cardHealth: 2,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      image: "saloon_brewmaster",
      cardDescription: "When play this, draw a card.",
      cardType: "minion",
      cardImageName: "saloon_brewmaster",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Flame Revenant",
      cardSkills: [{ type: "EmpowerRandomCard", amount: 1 }],
      cardCost: 2,
      cardAttack: 2,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      image: "flame_revenant",
      cardDescription: "When play this, give random minion 1/1 attack/health.",
      cardType: "minion",
      cardImageName: "flame_revenant ",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Spontaneous Combustion",
      cardSkills: [{ type: "DealRandomEnemy", amount: 4 }],
      cardCost: 2,
      cardAttack: 0,
      cardHealth: 0,
      image: "spontaneous_combustion",
      cardImageName: "spontaneous_combustion",
      cardDescription: "When play this, give 4 damage to random enemy.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Solar Flare",
      cardSkills: [{ type: "DealRandomEnemy", amount: 4 }],
      cardCost: 5,
      cardAttack: 0,
      cardHealth: 0,
      image: "solar_flare",
      cardImageName: "solar_flare",
      cardDescription: "When play this, give 4 damage to random enemy.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Tidepool Pupil",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 2,
      cardHealth: 2,
      image: "tidepool_pupil",
      cardImageName: "tidepool_pupil",
      cardDescription: "",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Redgill Razorjaw",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 3,
      cardHealth: 2,
      image: "redgill_razorjaw",
      cardImageName: "redgill_razorjaw",
      cardDescription: "",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Unchained Gladiator",
      cardSkills: [],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 4,
      image: "unchained_gladiator",
      cardImageName: "unchained_gladiator",
      cardDescription: "",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Raid Leader",
      cardSkills: [],
      cardCost: 3,
      cardAttack: 3,
      cardHealth: 4,
      image: "raid_leader",
      cardImageName: "raid_leader",
      cardDescription: "",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Gorgonzormu",
      cardSkills: [],
      cardCost: 3,
      cardAttack: 4,
      cardHealth: 3,
      image: "gorgonzormu",
      cardImageName: "gorgonzormu",
      cardDescription: "",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Shield Master",
      cardSkills: [{ type: "GainArmor", amount: 4 }],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 5,
      image: "shield_master",
      cardImageName: "shield_master",
      cardDescription: "When play this, give 4 armor to your hero.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Twilight Drake",
      cardSkills: [{ type: "GainHealthAmountOfCardsInYourHand" }],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 5,
      image: "twilight_drake",
      cardImageName: "twilight_drake",
      cardDescription: "When play this, give 4 armor to your hero.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Boulderfist Ogre",
      cardSkills: [{ type: "GiveArmor", amount: 2 }],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 5,
      image: "boulderfist_ogre",
      cardImageName: "boulderfist_ogre",
      cardDescription: "When play this, give 2 armor to your hero.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Boulderfist Ogre",
      cardSkills: [{ type: "GiveArmor", amount: 2 }],
      cardCost: 3,
      cardAttack: 3,
      cardHealth: 4,
      image: "dread_corsair",
      cardImageName: "dread_corsair",
      cardDescription: "When play this, give 2 armor to your hero.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },

  ],
  "engin-pack": [
    {
      cardName: "Twilight Drake",
      cardSkills: [{ type: "GainHealthAmountOfCardsInYourHand" }],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 5,
      image: "twilight_drake",
      cardImageName: "twilight_drake",
      cardDescription: "When play this, give 4 armor to your hero.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "jaina-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Diktatör",
      cardSkills: [{ type: "EmpowerRandomCard", amount: 3 }],
      cardCost: 1,
      cardAttack: 4,
      cardHealth: 2,
      image: "dictator",
      cardImageName: "dictator", 
      cardDescription: "Altarnatif bir gerçeklikte karanlık tarafı ve yanlış olan tarafı seçtin",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Gitarist",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 2,
      image: "guitar",
      cardImageName: "guitar",
      cardDescription: "Seslerler çıkarıp düşmanı rahatsiz ediyorsun..'Ağğymm gonaswink from the şendıliir'",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Ödenmiş Bedel",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 1,
      image: "soldier",
      cardImageName: "soldier",
      cardDescription: "Bu kartı oynadıktan sonra iş bulma ihtimaliniz %50 artar.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Savaşçı",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 9,
      image: "worrior",
      cardImageName: "worrior",
      cardDescription: "Savaşçı kartı oynandıktan sonra 3 zırh kazandırır.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Askeri Harekat",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 4,
      cardHealth: 3,
      image: "asker",
      cardImageName: "asker",
      cardDescription: "7.62 mm ile düşmana saldırır, her bir rakibin canını 1-3 azaltır.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Avci",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 5,
      cardHealth: 2,
      image: "avci",
      cardImageName: "avci",
      cardDescription: "Usta bir iz sürücü, rakibine tuzak kurup ölümcül oklarıyla avlar.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Cat",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 9,
      image: "cat",
      cardImageName: "cat",
      cardDescription: "Çevik ve sessiz bir avcı. Kediye dönüşmüş, artık kendinde değil gibi görünüyor.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Kolay Meslek",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 2,
      image: "dead",
      cardImageName: "dead",
      cardDescription: "Yattığın yerden para kazanırsın, aa ölmüşüm.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Dedektif",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 2,
      image: "dedektif",
      cardImageName: "dedektif",
      cardDescription: "Her hamlede ipucu toplayarak düşmanın zayıf noktalarını açığa çıkarır.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Design",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 4,
      image: "design",
      cardImageName: "design",
      cardDescription: "Bu kitabı okuduğunda, zihnine bilgi aktığını hissediyorsun.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Kyk",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 1,
      image: "kyk",
      cardImageName: "kyk",
      cardDescription: "Görenlerin iştahını kaçırır, her bir düşmanın canını azaltır!",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Madenci",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 4,
      image: "madenci",
      cardImageName: "madenci",
      cardDescription: "Derin kazılar yaparak hazine arar, patlayıcılarla engelleri aşar.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Rohan Atlısı",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 5,
      cardHealth: 6,
      image: "parlamak",
      cardImageName: "parlamak",
      cardDescription: "Cesur Rohan atlısı, hız ve güçle düşmana saldırarak 5 zırh kazandırır.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Son Akşam Yemegi",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 5,
      cardHealth: 3,
      image: "sonaksamyemegi",
      cardImageName: "sonaksamyemegi",
      cardDescription: "Dostlarınızla yediğiniz şehirdeki son yemek, 3 zırh kazandırır.",
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "engin-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
  ],
  "yavuz-pack": [
    {
      cardName: "Hacker Yavuz",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3, 
      cardHealth: 2,
      image: "hacker",
      cardImageName: "hacker",
      cardDescription: "Kardeşim az kaldı sızıyorum bölgeye. Bilgisayarını kapatırken bir şeyler yapmışım.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Sleeper Coder",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 1,
      image: "sleeper",
      cardImageName: "sleeper",
      cardDescription: "Rüyasnda bugları fixleyerek 5 hp yeniler",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Atil Kedi",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 2,
      image: "atil_kedi",
      cardImageName: "atil_kedi",
      cardDescription: "Rakibe saldırır ve 1 can azaltır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Asker Yavuz",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 5,
      cardHealth: 7,
      image: "asker",
      cardImageName: "asker",
      cardDescription: "Şiddetle ayağa kalkar. Kardeşim gece 2-4 nöbetim var rahatsız etme.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Çay Zamanı",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 2,
      image: "cay",
      cardImageName: "cay",
      cardDescription: "Kısa bir çay molası verip, 2 hp yeniledikten sonra çatışmaya devam eder.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Deadline",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 1,
      image: "deadline",
      cardImageName: "deadline",
      cardDescription: "Rakibe 3 can azaltır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Arkadaşlar Çetesi",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 5,
      cardHealth: 5,
      image: "friends",
      cardImageName: "friends",
      cardDescription: "Arkadaşlığın gücü adına! Bowling turnuvasına gider ve 5 zırh kazanır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Hacker",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 2,
      image: "hacker",
      cardImageName: "hacker",
      cardDescription: "Rakibe anında saldırarak 3 can azaltır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Lahmacun Time",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 3,
      image: "lahmacun",
      cardImageName: "lahmacun",
      cardDescription: "Düşmanın lahmacun dükkanına giderek en az 6(!) tane gömer, zırh olarak kullanır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Ben Aslında Yoğum",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 5,
      image: "missing",
      cardImageName: "missing",
      cardDescription: "Yavuz zehirli düşman hasarlarından korunamk için kendini gizler.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Bilboard Yavuz",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 2,
      image: "pano",
      cardImageName: "pano",
      cardDescription: "Düşman bölgesinde gizlice bilboardlara sızar, tüm düsmanlar şoka uğrar hepsinin 1 canı azalır.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Radyasyon",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 3,
      cardHealth: 3,
      image: "radyasyon",
      cardImageName: "radyasyon",
      cardDescription: "Ukrayna Chernobyl bölgesinden iş teklifi gelir fakat gitmez, onlara bu fotoğrafı gönderir.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Roket Adam",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 6,
      cardHealth: 2,
      image: "rocket",
      cardImageName: "rocket",
      cardDescription: "Tasarladığı güdümlü roketler ile hedefin içinden geçer.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "spell",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Super Yavuz",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 7,
      cardHealth: 7,
      image: "superyavuz",
      cardImageName: "superyavuz",
      cardDescription: "-O bir kuş!, - hayır o bir uçak, hayır o SÜPER YAVUZ",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Atıl Kedi",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 9,
      image: "tavan_kedi",
      cardImageName: "tavan_kedi",
      cardDescription: "Yavuz'un tavan arasındaki kedisi, aşağı inerek rakiplerin 1 canını azaltarak tokatlar.",
      cardOwner: "enemy",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "yavuz-pack",
      cardType: "minion",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
  ],
  "mustafa-pack": [
    {
      cardName: "Gece Parıltısı",
      cardSkills: [],
      cardCost: 3,
      cardAttack: 0,
      cardHealth: 0,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "moon",
      cardDescription:
        "Gökyüzündeki parıltısıyla tüm dost birimlere +1 can verir.",
      cardType: "spell",
      cardImageName: "moon",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Uzay Yolcusu Zeki",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 2,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "astronaut_zeki_muren",
      cardDescription:
        "Uzayın derinliklerinden gelen bu kart, dost birimlere +1 zırh sağlar.",
      cardType: "minion",
      cardImageName: "astronaut_zeki_muren",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Tırmanan Tosbik",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 2,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "climbing_turtle",
      cardDescription:
        "Her turda düşman birimlerinden birine -1 saldırı gücü verir.",
      cardType: "minion",
      cardImageName: "climbing_turtle",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Adaletin Adamı",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 2,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "better_call_saul_jimmy",
      cardDescription:
        "Adalet terazisini korur; düşman minyonlarına -1 zırh verir.",
      cardType: "minion",
      cardImageName: "better_call_saul_jimmy",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Cezalandırıcı",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 3,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "punisher",
      cardDescription:
        "Savaşa adanmış ruhuyla her saldırıda ekstra hasar verir.",
      cardType: "minion",
      cardImageName: "punisher",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Ayaklı Gizem",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 2,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "standing_cat",
      cardDescription:
        "Tüylerinin ardında gizlenen, rakibi şaşırtan kedi refleksleri.",
      cardType: "minion",
      cardImageName: "standing_cat",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Büyük Çığlık",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 2,
      cardHealth: 2,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "big_scream_cat",
      cardDescription:
        "Tüylerinin ardında gizlenen, rakibi şaşırtan kedi refleksleri.",
      cardType: "minion",
      cardImageName: "big_scream_cat",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Anı Yakala",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 0,
      cardHealth: 0,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "photo_selfie",
      cardDescription:
        "Zamanı durdurup anıyı yakalar; her kullanıldığında +1 can verir.",
      cardType: "spell",
      cardImageName: "photo_selfie",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Balıkçı",
      cardSkills: [],
      cardCost: 3,
      cardAttack: 2,
      cardHealth: 4,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "fishing",
      cardDescription: "Her elde kaldığında +2 zırh kazandırır.",
      cardType: "minion",
      cardImageName: "fishing",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Kafes Kralı Maviş",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "caged_bird",
      cardDescription: "Hızlı bir saldırı ile düşmanların savunmalarını deler.",
      cardType: "minion",
      cardImageName: "caged_bird",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Aqua Man",
      cardSkills: [],
      cardCost: 4,
      cardAttack: 4,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "aqua_selfie",
      cardDescription:
        "Su gibi akışkan hareketlerle düşmanları çemberine alır.",
      cardType: "minion",
      cardImageName: "aqua_selfie",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Sadık Dost",
      cardSkills: [],
      cardCost: 3,
      cardAttack: 2,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "dog_view",
      cardDescription: "Sadakati sayesinde her tur sonunda +1 zırh kazandırır.",
      cardType: "minion",
      cardImageName: "dog_view",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Öğrenilmiş Çaresizlik",
      cardSkills: [],
      cardCost: 2,
      cardAttack: 0,
      cardHealth: 0,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "thief",
      cardDescription:
        "Düşmanının dikkatini dağıtır; rakibin saldırısını %50 azaltır.",
      cardType: "spell",
      cardImageName: "thief",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Bulmaca Ustası",
      cardSkills: [],
      cardCost: 1,
      cardAttack: 1,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "puzzle_turtle",
      cardDescription:
        "Bulmacanın büyüsüyle akıl zırhı kazandırır; +2 can sağlar.",
      cardType: "minion",
      cardImageName: "puzzle_turtle",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    {
      cardName: "Rüzgar Sürücüsü",
      cardSkills: [],
      cardCost: 4,
      cardAttack: 3,
      cardHealth: 3,
      cardOwner: "player",
      profile: null,
      borderColor: null,
      isSelected: false,
      isPlayedLastTurn: false,
      cardId: Math.random(),
      cardPack: "mustafa-pack",
      image: "biker_selfie",
      cardDescription:
        "Süratle rakip safları delip geçer; her saldırıda +1 saldırı kazanır.",
      cardType: "minion",
      cardImageName: "biker_selfie",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
  ],
};
