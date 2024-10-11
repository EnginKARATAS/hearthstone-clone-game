import "./Profile.css";
export default function Profile({ img, position }) {
  return (
    <div
      className="profile absolute"
      style={{
        top: position.top,
        left: position.left,
        bottom: position.bottom,
      }}
    >
      <div className="image-container">
        <img
          className="profile-image"
          src={
            "/public/cards/card-images/" + img.pack + "/" + img.photo + ".png"
          }
          alt=""
        />
      </div>
      
        <div className="armor-bar absolute">
          <img className="armor-bar-image absolute" src="/public/armor-bar.png" alt="" />
        <div className="flex justify-center items-center  ">
          <p className="text-white text-xl z-10 armor-bar-text">33</p>
        </div>
      </div>

      <div className="health-bar absolute">
        <img className="health-bar-image absolute" src="/public/health-bar.png" alt="" />
        <div className="flex justify-center items-center  ">
          <p className="text-white text-xl z-10 health-bar-text">33</p>
        </div>
      </div>
    </div>
  );
}
