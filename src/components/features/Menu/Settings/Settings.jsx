import "./Settings.css";

import { useSelector } from "react-redux";
export default function Settings({ setOpenMenuOption }) {
  return (
    <div className="bg-outer-settings">
      <div
        onClick={() => setOpenMenuOption("menu")}
        className="settings absolute z-20"
      >
        <h1>Settings</h1>
      </div>
    </div>
  );
}
