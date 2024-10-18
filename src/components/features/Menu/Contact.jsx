import "./Contact.css";

import { useSelector } from "react-redux";
export default function Contact({ setOpenMenuOption }) {
  return (
    <div className="bg-outer-contact">
      <div
        onClick={() => setOpenMenuOption("menu")}
        className="contact absolute z-20"
      >
        <h1>Contact</h1>
      </div>
    </div>
  );
}
