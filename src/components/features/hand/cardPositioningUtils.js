import { WINDOW_HEIGHT } from "../../../constants/dimensions";

export const pos = (cardsLenght, i) => {
  const startPoint = 444;
  if (WINDOW_HEIGHT > 768) {
    if (cardsLenght == 10) {
      return startPoint + i * 33 - (16 * i * cardsLenght * 0.7 + i * 55); //swipe left - swipe card between cards
    }
    return startPoint + i * 33 - (16 * i * cardsLenght * 0.7 + i * 66); //swipe left - swipe card between cards
  } else return startPoint + i * 1 - (16 * i * cardsLenght * 0.7 + i * 66); //swipe left - swipe card between cards
};

export const getTop = (cardsLenght) => {
  if (cardsLenght > 2 && cardsLenght <= 7) {
    return 55;
  } else if (cardsLenght == 8) {
    return 32;
  }
  return 0;
};
