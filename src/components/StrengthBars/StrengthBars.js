import "./StrengthBars.scss";

export default function StrengthBars({ strength }) {
  const getBars = (index) => {
    if (!strength) {
      return "";
    }

    switch (strength) {
      case "Too Weak!":
        return index <= 0 ? "too-weak" : "";
      case "Weak":
        return index <= 1 ? "weak" : "";
      case "Medium":
        return index <= 2 ? "medium" : "";
      case "Strong":
        return index <= 3 ? "strong" : "";
      default:
        return "";
    }
  };

  return (
    <div className="strength-bars__container">
      {strength && <p>{strength}</p>}
      <div className="strength-bars">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className={`strength-bar ${getBars(index)}`}></div>
        ))}
      </div>
    </div>
  );
}
