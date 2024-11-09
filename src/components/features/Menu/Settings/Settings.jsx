import "./Settings.css";

import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Settings() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setGameState("menu"));
  };

  return (
    <div
      className="bg-outer-settings settings"
    >
      <div className="settings-language absolute z-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-xl px-4 py-2 rounded-lg w-fit text-center">
          {t("selectLanguage")}{" "}
        </h1>
        <div className="flex gap-4">
          <img src="/menu/menu/settings/en.png" width="100" alt="en" onClick={() => changeLanguage("en")} />
          <img src="/menu/menu/settings/tr.png" width="100" alt="tr" onClick={() => changeLanguage("tr")} />{" "}
        </div>
      </div>
    </div>
  );
}
