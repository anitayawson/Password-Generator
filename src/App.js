import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator</h1>
      </header>
      <main>
        <form>
          <input
            type="text"
            placeholder="P4$5W0rD!"
            aria-label="Generated Password"
          />
          <article>
            <div>
              <p>Character Length</p>
              <h2>0</h2>
            </div>
            <hr />
            <section>
              <div>
                <label htmlFor="uppercase">
                  <input
                    type="checkbox"
                    id="uppercase"
                    name="uppercase"
                    value="Uppercase"
                  />
                  Include Uppercase Letters
                </label>
              </div>
              <div>
                <label htmlFor="lowercase">
                  <input
                    type="checkbox"
                    id="lowercase"
                    name="lower"
                    value="Lowercase"
                  />
                  Include Lowercase Letters
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="numbers"
                    name="numbers"
                    value="Numbers"
                  />
                  Include Numbers
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="symbols"
                    name="symbols"
                    value="Symbols"
                  />
                  Include Symbols
                </label>
              </div>
            </section>

            <section>
              <p>Strength</p>
              <div>Medium</div>
            </section>

            <button type="submit">Generate</button>
          </article>
        </form>
      </main>
    </div>
  );
}

export default App;
