import "./Checklist.scss";
import Checkbox from "@mui/material/Checkbox";

const checklistData = [
  { id: "uppercase", label: "Include Uppercase Letters" },
  { id: "lowercase", label: "Include Lowercase Letters" },
  { id: "numbers", label: "Include Numbers" },
  { id: "symbols", label: "Include Symbols" },
];

export default function Checklist({ checklist, setChecklist }) {
  const handleChange = (event) => {
    const { id, checked } = event.target;
    setChecklist((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <section className="checklist">
      {checklistData.map((item) => (
        <label
          key={item.id}
          htmlFor={item.id}
          className="checklist__item-label"
        >
          <Checkbox
            id={item.id}
            className="checklist__icon"
            checked={checklist[item.id]}
            onChange={handleChange}
            style={{ color: "#a4ffaf", padding: 0 }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          />

          {item.label}
        </label>
      ))}
    </section>
  );
}
