import "./Credits.css";
import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
import { useTranslation } from "react-i18next";

export default function Credits() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="bg-outer-credits absolute z-20">
      <div
        onClick={() => dispatch(setGameState("menu"))}
        className="credits absolute z-20"
      >
        <div className=" w-full h-full bg-black opacity-50">
          <h1 className="h-text absolute text-white text-2xl">{t('credits')}</h1>
          <p className="p-text absolute text-white text-justify">
            {t('thisGameIsFanMade')}
            <br />
            <br />
            {t('thankYouFor')}
            <br />
            <br />
            {t('sendingMeTheCardPackages')}
            <br />
            <br />
            {t('developmentTechnologies')}
            <br /> <br />
            {t('developer')}
          </p>
        </div>
      </div>
    </div>
  );
}
