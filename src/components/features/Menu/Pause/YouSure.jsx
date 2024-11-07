import "./YouSure.css";

export default function YouSure({ title, message, onConfirm, onCancel }) {
  return (
    <div className="you-sure-overlay" onClick={onCancel}>
      <div className="you-sure-popup" onClick={(e) => e.stopPropagation()}>
        <h2 className="pause-title">{title}</h2>
        <p className="you-sure-message">{message}</p>
        <div className="you-sure-buttons">
          <button className="you-sure-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="you-sure-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

