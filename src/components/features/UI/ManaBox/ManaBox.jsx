import { useMemo } from "react";
import "./ManaBox.css";
import { useSelector } from "react-redux";

export default function ManaBox({ position, player }) {
  const mana = useSelector((state) => state.counter.value);
  const inGameMana = useSelector((state) => state.counter.inGameMana);

  const renderManaCrystals = useMemo(() => {
    if (player === "enemy") return null;
    
    return (
      <div className="mana-cyrstals flex flex-row gap-1 absolute ">
        {inGameMana[player] >= 0 &&
          Array.from({ length: mana[player] - inGameMana[player] }).map(
            (v, i) => (
              <img
                src="/empty-mana-bg.png"
                alt="mana-crystal"
                className="mana-cyrstal"
                key={i}
              />
            )
          )}
        {Array.from({
          length: mana[player] - (mana[player] - inGameMana[player]),
        }).map((v, i) => (
          <img
            src="/mana-bg.png"
            alt="mana-crystal"
            className="mana-cyrstal"
            key={i}
          />
        ))}
      </div>
    );
  }, [mana[player], inGameMana[player], player]);

  return (
    <div
      className="mana-container flex flex-row gap-5 align-center absolute"
      style={{
        top: position?.top,
        left: position?.left,
      }}
    >
      <div className="mana-counter flex justify-center items-center absolute">
        {mana[player] < 10 && (
          <p className="mana-text text-sky-400 px-4 py-1">
            {inGameMana[player]}/{mana[player]}
          </p>
        )}
        {mana[player] == 10 && (
          <p className="mana-text text-sky-400 py-3 mt-[-6px] ml-[3px]"
          >
            {inGameMana[player]}/{mana[player]}
          </p>
        )}
      </div>
      {renderManaCrystals}
    </div>
  );
}
