import "./StrengthBars.scss";

export default function StrengthBars({ strength }) {
  return (
    <div className="strength-bars__container">
      <p>Medium</p>
      <div className="strength-bars">
        <div
          className={`strength-bar ${
            strength === "Too Weak!" ? "too-weak" : ""
          }`}
        ></div>
        <div
          className={`strength-bar ${
            strength === "Weak" ||
            strength === "Medium" ||
            strength === "Strong"
              ? "weak"
              : ""
          }`}
        ></div>
        <div
          className={`strength-bar ${
            strength === "Medium" || strength === "Strong" ? "medium" : ""
          }`}
        ></div>
        <div
          className={`strength-bar ${strength === "Strong" ? "strong" : ""}`}
        ></div>
      </div>
    </div>
  );
}
