import "./App.scss";
import Slider from "@mui/material/Slider";
import CopyIcon from "./assets/images/icon-copy.svg";
import Checklist from "./components/Checklist/Checklist";

function App() {
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
            <img src={CopyIcon} alt="copy" className="form__copy-icon" />
          </section>
          <article className="form__main-content">
            <div className="char-length">
              <p className="char-length__text">Character Length</p>
              <h2 className="char-length__number">0</h2>
            </div>
            <Slider
              aria-label="Character Length"
              defaultValue={10}
              // getAriaValueText={valuetext}
              valueLabelDisplay="off"
              shiftStep={30}
              step={1}
              marks={false}
              min={1}
              max={20}
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
                },
              }}
            />
            <Checklist />
            <section className="password-strength">
              <p>Strength</p>
              <div>Medium</div>
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
