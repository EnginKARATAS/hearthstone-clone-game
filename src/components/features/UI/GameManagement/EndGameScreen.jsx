import { useState, useEffect } from "react";

export default function EndGameScreen() {
  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <h2 className="text-3xl">Game Over</h2>
      <span className="text-sm mb-5">
        Wait for 7 seconds to go to secret level⬅
      </span>
      <p className="loading text-xl  w-[500px] text-center">
        The game has come to an end. Thank you for 
        sending me the card packages(15 X2 cards!).
      </p>
      <ul>
        <li>Yavuz Çeliker</li>
        <li>Mustafa Özkan</li>
        <li>XXX</li>
        <li>XXX</li>
        <li>XXX</li>
        <li>XXX</li>
      </ul>
    </div>
  );
}
