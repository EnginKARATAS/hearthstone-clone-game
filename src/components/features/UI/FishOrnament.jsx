import "./FishOrnament.css";

export default function FishOrnament() {
  return (
    <div>
      <img src="/public/fish.png" alt="fish"  className="left-fish absolute bottom-0" />
      <img src="/public/fish.png" alt="fish"  className="right-fish absolute" />
    </div>
  );
}
