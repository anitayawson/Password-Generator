import "./StrengthBars.scss";

export default function StrengthBars({ strength }) {
  return (
    <div className="strength-bars__container">
      <p>Medium</p>
      <div className="strength-bars">
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
      </div>
    </div>
  );
}
