import { useState } from "react";
import "./App.scss";
import Slider from "@mui/material/Slider";
import Checklist from "./components/Checklist/Checklist";
import StrengthBars from "./components/StrengthBars/StrengthBars";

function App() {
  const [charLength, setCharLength] = useState(5);
  // const [password, setPassword] = useState("");
  // const [strength, setStrength] = useState("");

  // const calculateStrength = (password) => {
  //   let strengthLevel = 0;
  //   if (password.length > 7) strengthLevel++;
  //   if (/[A-Z]/.test(password)) strengthLevel++;
  //   if (/[a-z]/.test(password)) strengthLevel++;
  //   if (/[0-9]/.test(password)) strengthLevel++;
  //   if (/[^A-Za-z0-9]/.test(password)) strengthLevel++;

  //   if (strengthLevel === 1) setStrength("Too Weak!");
  //   else if (strengthLevel === 2) setStrength("Weak");
  //   else if (strengthLevel === 3) setStrength("Medium");
  //   else if (strengthLevel >= 4) setStrength("Strong");
  //   else setStrength("");
  // };

  // const handleGeneratePassword = (event) => {
  //   const generatedPassword = "";
  //   setPassword(generatedPassword);
  //   calculateStrength(generatedPassword);
  // };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Password Generator</h1>
      </header>
      <main>
        <form className="form">
          <section className="form__output-section">
            <input
              className="form__password-output"
              type="text"
              placeholder="P4$5W0rD!"
              aria-label="Generated Password"
              disabled
            />
            <svg
              width="21"
              height="24"
              className="form__copy-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
              />
            </svg>
          </section>
          <article className="form__main-content">
            <div className="char-length">
              <p className="char-length__text">Character Length</p>
              <h2 className="char-length__number">{charLength}</h2>
            </div>
            <Slider
              aria-label="Character Length"
              defaultValue={5}
              valueLabelDisplay="off"
              step={1}
              marks={false}
              min={1}
              max={20}
              value={charLength}
              onChange={(e, value) => setCharLength(value)}
              sx={{
                "& .MuiSlider-rail": {
                  height: 8,
                  borderRadius: 0,
                  backgroundColor: "#18171f",
                },
                "& .MuiSlider-track": {
                  height: 8,
                  borderRadius: 0,
                  border: "none",
                  backgroundColor: "#a4ffaf",
                },
                "& .MuiSlider-thumb": {
                  backgroundColor: "#e6e5ea",
                  width: 28,
                  height: 28,
                  "&:hover": {
                    backgroundColor: "#18171f",
                    border: "2px solid #a4ffaf",
                  },
                },
              }}
            />
            <Checklist />
            <section className="password-strength">
              <p>Strength</p>
              <StrengthBars />
            </section>

            <button className="form__btn" type="submit">
              Generate
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                className="form__btn-icon"
              >
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </button>
          </article>
        </form>
      </main>
    </div>
  );
}

export default App;
