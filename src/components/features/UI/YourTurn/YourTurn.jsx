import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (isClientTurn === true) {
      setOpenPopup(true);
      const timer = setTimeout(() => {
        setOpenPopup(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn]);

  return (
    <div>
      {openPopup && (
        <img className="your-turn" src="/public/menu/turn/your-turn.png" alt="" />
      )}
    </div>
  );
}
