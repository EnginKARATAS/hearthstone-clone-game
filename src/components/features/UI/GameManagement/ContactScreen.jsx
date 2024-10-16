import { useState, useEffect } from "react";

export default function ContactScreen() {
  const [surpriseCount, setSurpriseCount] = useState(0);

  useEffect(() => {
    const surpriseCount = parseInt(localStorage.getItem('surpriseCount')) || 0;
    localStorage.setItem('surpriseCount', surpriseCount + 1);
    setSurpriseCount(surpriseCount);
  }, []);

  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <img src="/public/menu/loading/hearthstone.png" alt="heartstone" />
      <h1 className="loading text-5xl font-bold">Thank you for playing</h1>
      <h2 className="loading text-3xl font-bold mt-10">
        Big Surprise Counter: {surpriseCount}/5
      </h2>
      {surpriseCount >= 5 && (
        <div className="flex flex-col items-center">
          <p className="text-white">You have reached the secret level! Satisfaction guaranteed :D</p>

        <video
          src="/public/menu/loading/thisisnotasecret.mp4"
          autoPlay
          muted
          loop
          className="w-[400px] h-[400px]"
        ></video>
        </div>
      )}
      <p className="loading text-sm mt-20 w-[800px] text-center">
        This game is a fan-made project inspired by the popular card game
        Hearthstone, developed by Blizzard Entertainment. It is not affiliated
        with, endorsed by, or sponsored by Blizzard Entertainment or any of its
        subsidiaries. All trademarks, copyrights, and other intellectual
        property rights related to Hearthstone are the property of Blizzard
        Entertainment. This project is intended for educational and
        entertainment purposes only.
      </p>
    </div>
  );
}
