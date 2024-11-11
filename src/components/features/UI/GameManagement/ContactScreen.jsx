import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetGame, setGameState } from "../../game/gameSlice.ts";
import { useTranslation } from "react-i18next";
export default function ContactScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [surpriseCount, setSurpriseCount] = useState(0);

  useEffect(() => {
    const surpriseCount = parseInt(localStorage.getItem("surpriseCount")) || 0;
    localStorage.setItem("surpriseCount", surpriseCount + 1);
    setSurpriseCount(surpriseCount);
  }, []);

  const goMainMenu = () => {
    dispatch(resetGame());
    dispatch(setGameState("characterSelection"));
  };
  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <img src="/menu/loading/hearthstone.png" alt="heartstone" />
      <h1 className="loading text-5xl font-bold">{t("thankYouForPlaying")}</h1>
      {surpriseCount % 5 !== 0 && (
        <div className="flex flex-col items-center">
          <h2 className="loading text-3xl font-bold mt-10">
            {t("bigSurpriseCounter")}: {surpriseCount}/5
          </h2>
        </div>
      )}
      {surpriseCount === 5 && (
        <div className="">
          <p className="text-white">{t("bigSurprise")}</p>
          <video
            src="/menu/loading/thisisnotasecret.mp4"
            autoPlay
            muted
            loop
            className="w-[400px] h-[400px]"
          ></video>
          <p className="text-white">{t("nextPrize")}</p>
        </div>
      )}
      {surpriseCount === 10 && (
        <div className="">
          <p className="text-white">{t("nextPrize")}</p>
          <video
            src="/menu/loading/10secret.mp4"
            autoPlay
            muted
            loop
            className="w-[400px] h-[400px]"
          ></video>
        </div>
      )}
      <button
        className="play-again-btn mt-10 text-xl font-bold text-white bg-black px-10 py-2 rounded-md"
        onClick={goMainMenu}
      >
        {t("playAgain")}
      </button>

      <p className="loading text-sm mt-20 w-[800px] text-center">
        {t("thisGameIsFanMade")}
      </p>
    </div>
  );
}
