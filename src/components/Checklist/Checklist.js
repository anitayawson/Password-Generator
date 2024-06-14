import "./Checklist.scss";
import Checkbox from "@mui/material/Checkbox";

const checklistData = [
  { id: "uppercase", label: "Include Uppercase Letters", defaultChecked: true },
  { id: "lowercase", label: "Include Lowercase Letters", defaultChecked: true },
  { id: "numbers", label: "Include Numbers", defaultChecked: true },
  { id: "symbols", label: "Include Symbols", defaultChecked: false },
];

export default function Checklist() {
  return (
    <section className="checklist">
      {checklistData.map((item) => (
        <label
          key={item.id}
          htmlFor={item.id}
          className="checklist__item-label"
        >
          <Checkbox
            className="checklist__icon"
            defaultChecked={item.defaultChecked}
            style={{ color: "#a4ffaf", padding: 0 }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          />

          {item.label}
        </label>
      ))}
    </section>
  );
}
