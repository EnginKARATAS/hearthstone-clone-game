import "./Credits.css";

import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
export default function Credits() {
  const dispatch = useDispatch();
  return (
    <div className="bg-outer-credits absolute z-20">
      <div
        onClick={() => dispatch(setGameState("menu"))}
        className="credits absolute z-20"
      >
        <div className=" w-full h-full bg-black opacity-50">
          <h1 className="h-text absolute text-white text-2xl">Hakkında</h1>
          <p className="p-text absolute text-white text-justify">
            Tamamen açık kaynak "Hearthstone" Oyun şu anda Blizzard Entertainment 'Hearthstone' oyununa benzer
            şekilde geliştirilmiştir fakat kartların davranışı bazı noktalarda
            farklılıklar göstermektedir.
            <br />
            <br />
            Oyuna yeterli talep olduğu durumda 'Hearthstone' kimliğinden ayrılıp
            Çeşitli modlara sahip olabilen benzersiz bir oyun olabilecek şekilde
            geliştirildi.
            <br />
            <br />
            Oyun şu an için backend servislerinden yoğun bir şekilde
            yararlanmıyor. Fakat socket mimarisi veya backend servisleri
            kullanılarak oyunun sonucu büyük oranda geliştirilebilir. Oyunun
            geliştirme süreci olumlu yorumlar olduğu durumda devam edecektir. 
            <br />
            <br />
            Oyunun geliştirilmesi sırasında kullanılan teknolojiler: SOLID, React,
            Redux, Tailwind CSS, Vite, TypeScript, I18N internationalization
            <br /> <br />
            Bu oyun Engin Karataş tarafından geliştirildi.
          </p>
        </div>
      </div>
    </div>
  );
}
