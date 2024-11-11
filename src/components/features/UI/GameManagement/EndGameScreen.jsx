import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function EndGameScreen() {
  const {t} = useTranslation();
  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <h2 className="text-3xl">Game Over</h2>
      <span className="text-sm mb-5">
        {t("waitFor7SecondsToGoToSecretLevel")}
      </span>
      <p className="loading text-xl  w-[500px] text-center">
        {t("theGameHasComeToAnEnd")}. 
        <br />
      
      </p>
      <ul className=" mt-5">
        <li className="bg-white p-2 mt-1">Yavuz Celiker</li>
        <li className="bg-white p-2 mt-1">Mustafa Ozkan</li>
        <li className="bg-white p-2 mt-1">Ahmet Salih Balandi</li>
        <li className="bg-white p-2 mt-1">Azad Karataş</li>
        <li className="bg-white p-2 mt-1">Hasan Eskin</li>
      </ul>
    </div>
  );
}
