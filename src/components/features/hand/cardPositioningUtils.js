export const pos = (cardsLenght, i) => {
    const startPoint = 444;
    return (
      startPoint +
      i * 33 -
      (16 * i * cardsLenght * 0.7 + i * 66)
    ); //swipe left - swipe card between cards
  };
  
export const getTop = (cardsLenght) => {
    if (cardsLenght > 2 && cardsLenght <= 7) {
      return 55;
    }
    if (cardsLenght == 8) {
      return 32;
    }
    return 0;
  };